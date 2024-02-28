import { beforeAll, afterAll } from "bun:test";
import { Octokit } from "octokit";
import { resource } from "./resource.ts";

// any sdk setup here if needed
const octokit = new Octokit({
  auth: resource.token,
});

// load environment variables if needed (that aren't in resource.ts)
const owner = Bun.env.OWNER!;
const repo = Bun.env.REPO!;

beforeAll(async () => {
  // setup code here
  // make sure repo exists or create it
  console.log(`BEFOREALL: Creating repository ${owner}/${repo}`);
  await octokit.rest.repos.createForAuthenticatedUser({
    name: repo,
    private: true,
  });
  await octokit.request(`PUT /repos/${owner}/${repo}/contents/README.md`, {
    owner,
    repo,
    path: "README.md",
    message: "init repo",
    content: "bXkgbmV3IGZpbGUgY29udGVudHM=",
  });
});

afterAll(async () => {
  // delete repo
  console.log(`AFTERALL: Deleting repository ${owner}/${repo}`);
  await octokit.rest.repos.delete({ owner, repo });
});
