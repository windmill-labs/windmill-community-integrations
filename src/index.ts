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
  // script arguments here (also load environment variables if needed using Bun.env.VARIABLE_NAME!)

  console.log("TEST: Will test {actionName} with arguments: " /* arguments */)

  // any setup code here

  // calling main
  console.log("TEST: Running main function");
  const response = await main(resource, /* script arguments */);

  // assertions here
  // test the response of the main function as well as the side effects of the action directly on the service
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
    `# ${integrationNamePascal} Integration\n\n## Environment variables and credentials setup`
  );
  Bun.write(
    integrationPath + "/resource.ts",
    `export const resource = {
  // put your credentials here from the .env file (Bun.env.VARIABLE_NAME!)
}`
  );
  Bun.write(integrationPath + "/resource_type.json", RT_TEMPLATE);

  Bun.write(
    integrationPath + "/setup.ts",
    `import { beforeAll, afterAll } from "bun:test";
import { resource } from "./resource.ts";

// any sdk setup here if needed

// load environment variables if needed (that aren't in resource.ts)

beforeAll(() => {
  // setup code here
  console.log('BEFOREALL: Setup process');
})

afterAll(() => {
  // cleanup code here
  console.log('AFTERALL: Cleanup process');
})`
  );

  Bun.write(integrationPath + "/.env", `# put your credentials here`);

  await $`cd integrations/${integrationName} && bun init && rm -f index.ts`.quiet();

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
    const testTemplate = TEST_TEMPLATE.replace(/{actionName}/g, action.name);
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
