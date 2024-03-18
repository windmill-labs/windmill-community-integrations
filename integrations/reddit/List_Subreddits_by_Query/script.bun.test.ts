import { expect, test } from 'bun:test'
import { main } from './script.bun.ts'
import { resource } from '../resource.ts'

test('List Subreddits by Query', async () => {
	// script arguments here (also load environment variables if needed using Bun.env.VARIABLE_NAME!)

	console.log('TEST: Will test List Subreddits by Query with arguments: ' /* arguments */)

	// any setup code here

	// calling main
	console.log('TEST: Running main function')
	const response = await main(resource, 'cats', 1)

	// assertions here
	// test the response of the main function as well as the side effects of the action directly on the service
	expect(response?.data?.children.length).toBe(1)
	expect(response.data.children[0].data.display_name).toInclude('cats')
})
