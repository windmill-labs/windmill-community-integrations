type ExampleIntegration = {
  token: string;
};

export async function main(resource: ExampleIntegration, input: string) {
  // do something with the resource and with the input
  return resource.token + input;
}
