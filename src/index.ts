import { mkdir } from "node:fs/promises";
import { $ } from "bun";
import YAML from "yaml";

interface Action {
  description: string;
  name: string;
}

async function loadIntegrations() {
  const file = await Bun.file("./src/integrations.yaml");
  const content = await file.text();
  const actions = YAML.parse(content);
  const integrations: {
    [key: string]: Action[];
  } = {};
  for (const action of actions) {
    if (!(action.integration in integrations)) {
      integrations[action.integration] = [];
    }
    integrations[action.integration].push(action);
  }
  return integrations;
}

const SCRIPT_TEMPLATE = `
type {integrationName} = {
  // define your integration parameters here
}

export async function main(resource: {integrationName}, /* other parameters */) {
  // your code here
}`;

const TEST_TEMPLATE = `
import { expect, test } from "bun:test";
import { main } from "./script.bun.ts";
import { resource } from "../resource.ts";

test("{actionName}", async () => {
  // any setup code here

  // calling main
  const response = await main(resource, /* other parameters */);

  // assertions here
});
`;

const RT_TEMPLATE = `{
  "description": "{resource type description}",
  "schema": {
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "type": "object",
    "properties": {
      "{property1}": {
        "type": "string",
        "description": "{property1 description}"
      }
    },
    "required": [
      "{property1}"
    ]
  }
}`;

async function createBoilerplate(integrationName: string, actions: Action[]) {
  console.log(`Creating boilerplate for integration ${integrationName}...`);

  const integrationPath = "integrations/" + integrationName;

  await mkdir(integrationPath, { recursive: true });

  const integrationNamePascal =
    integrationName.charAt(0).toUpperCase() + integrationName.slice(1);

  Bun.write(
    integrationPath + "/README.md",
    `# ${integrationNamePascal} Integration\n\nWrite the steps to retrieve the credentials for the tests`
  );
  Bun.write(
    integrationPath + "/resource.ts",
    `export const resource = {
  // put your credentials here
}`
  );
  Bun.write(integrationPath + "/resource-type.json", RT_TEMPLATE);

  await $`cd integrations/${integrationName} && bun init`.quiet();

  for (const action of actions) {
    const actionFolderName = action.name.replace(/[^a-zA-Z0-9]/g, "_");
    console.log("Creating action template for", action.name);
    const actionPath = integrationPath + "/" + actionFolderName;

    await mkdir(actionPath, {
      recursive: true,
    });
    const template = SCRIPT_TEMPLATE.replace(
      /{integrationName}/g,
      integrationNamePascal
    );
    await Bun.write(actionPath + "/script.bun.ts", template);
    const testTemplate = TEST_TEMPLATE.replace(
      /{actionName}/g,
      action.description
    );
    await Bun.write(actionPath + "/script.bun.test.ts", testTemplate);
    await Bun.write(
      actionPath + "/script.json",
      JSON.stringify(
        {
          summary: action.name,
          description: action.description,
        },
        null,
        2
      )
    );
  }
}

if (import.meta.main) {
  const integrationName = Bun.argv[2];
  const integrations = await loadIntegrations();
  const actions = integrations[integrationName];
  if (!actions) {
    throw new Error("Integration not found");
  }
  await createBoilerplate(integrationName, actions);
}
