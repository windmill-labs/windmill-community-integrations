async function runTests(integrationName: string) {
  console.log(`Running tests for integration ${integrationName}...`);
  Bun.spawn({
    cwd: "integrations/" + integrationName,
    cmd: ["bun", "test", "--preload", "./setup.ts"],
    stdout: "inherit",
    stderr: "inherit",
  });
}

if (import.meta.main) {
  const integrationName = Bun.argv[2];
  await runTests(integrationName);
}
