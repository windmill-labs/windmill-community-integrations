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
	expect(response).toBe(`Form ${title} created`)
	// test the response of the main function as well as the side effects of the action directly on the service
	const forms = google.forms({
		version: 'v1',
		auth: resource.token
	})
})
