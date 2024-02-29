
import { expect, test } from "bun:test";
import { main } from "./script.bun.ts";
import { resource } from "../resource.ts";

test("Search Invoices", async () => {
  // script arguments here (also load environment variables if needed using Bun.env.VARIABLE_NAME!)

  console.log("TEST: Will test Search Invoices with arguments: " /* arguments */)

  // any setup code here

  // calling main
  console.log("TEST: Running main function");
  const response = await main(resource, /* script arguments */);

  // assertions here
  // test the response of the main function as well as the side effects of the action directly on the service
});
