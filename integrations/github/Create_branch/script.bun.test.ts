import { expect, test } from 'bun:test'
import { main } from './script.bun.ts'
import { resource } from '../resource.ts'
import { Octokit } from 'octokit'

test('Create branch', async () => {
	// script arguments
	const owner = Bun.env.OWNER!
	const repo = Bun.env.REPO!
	const sourceBranchName = 'main'
	const newBranchName = 'feature/new-branch'

	console.log(`TEST: Will test creating a new branch on the repository ${owner}/${repo}`)

	// check if branch exists, delete it if it does
	const octokit = new Octokit({
		auth: resource.token
	})

	try {
		const { data: newBranch } = await octokit.rest.repos.getBranch({
			branch: newBranchName,
			repo,
			owner
		})

		await octokit.rest.git.deleteRef({
			owner,
			repo,
			ref: `refs/heads/${newBranchName}`,
			sha: newBranch.commit.sha
		})
	} catch (e) {}

	// calling main
	console.log('TEST: Running main function')
	const response = await main(resource, owner, repo, sourceBranchName, newBranchName)

	// assertions here
	expect(response.ref).toBe(`refs/heads/${newBranchName}`)
	// check if branch exists
	const { data: newBranch } = await octokit.rest.repos.getBranch({
		branch: newBranchName,
		repo,
		owner
	})
	expect(newBranch.name).toBe(newBranchName)
})
