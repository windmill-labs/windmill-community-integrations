import { expect, test } from "bun:test";
import { main } from "./script.bun.ts";
import { resource } from "../resource.ts";

test("Example script", async () => {
  // any setup code here
  // not needed here

  // calling main
  const input = "input";
  const response = await main(resource, input);

  console.log(response);

  // assertions here
  expect(response).toBe(resource.token + input);
});
