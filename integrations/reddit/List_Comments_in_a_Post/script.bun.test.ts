import { expect, test } from 'bun:test'
import { main } from './script.bun.ts'
import { resource } from '../resource.ts'

test('List Comments in a Post', async () => {
	// script arguments here (also load environment variables if needed using Bun.env.VARIABLE_NAME!)

	console.log('TEST: Will test List Comments in a Post with arguments: ' /* arguments */)

	// any setup code here

	// calling main
	console.log('TEST: Running main function')
	const subreddit = 'delhi'
	const articleId = '1bdp1s3'
	const listing = await main(resource, subreddit, articleId)

	// assertions here
	// test the response of the main function as well as the side effects of the action directly on the service
	expect(listing).toBeDefined()
	expect(listing[0].data.children[0].data.subreddit).toBe(subreddit)
	expect(listing[0].data.children[0].data.id).toBe(articleId)
})
