import { main } from "./script.native.ts";
import { resource } from "../../../test-resource.ts";

Deno.test("Template_script", async () => {
  // calling main
  console.log(await main(resource));
});
