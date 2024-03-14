import { expect, test } from 'bun:test'
import { main } from './script.bun.ts'
import { resource } from '../resource.ts'
import { google } from '@googleapis/forms'

test('Create Form', async () => {
	// script arguments
	const title = 'Test Form'
	console.log(`TEST: Will test Create Form with arguments: ${title}`)

	// calling main
	console.log('TEST: Running main function')
	const response = await main(resource, title)

	// assertions here
	expect(response.info.title).toBe(title)
})
