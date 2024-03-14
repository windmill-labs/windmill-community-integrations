import { Octokit } from 'octokit'

type Github = {
	token: string
}

export async function main(
	resource: Github,
	owner: string,
	repo: string,
	sourceBranchName: string,
	newBranchName: string
) {
	// setup auth
	const octokit = new Octokit({
		auth: resource.token
	})

	// get sha of source branch
	const { data: sourceBranch } = await octokit.rest.repos.getBranch({
		branch: sourceBranchName,
		repo,
		owner
	})
	const sha = sourceBranch.commit.sha

	// create new branch
	const response = await octokit.rest.git.createRef({
		owner,
		repo,
		ref: `refs/heads/${newBranchName}`,
		sha
	})

	return response.data
}
