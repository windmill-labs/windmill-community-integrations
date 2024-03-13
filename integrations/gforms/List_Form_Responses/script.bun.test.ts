import { expect, test } from 'bun:test'
import { main } from './script.bun.ts'
import { resource } from '../resource.ts'
import { google } from '@googleapis/forms'

test('List Form Responses', async () => {
	// script arguments
	const formId = Bun.env.FORM_ID!
	console.log(`TEST: Will test List Form Responses with arguments: ${formId}`)

	// any setup code here

	// calling main
	console.log('TEST: Running main function')
	const response = await main(resource, formId)

	// assertions here
	expect(response).toBe('List Form Responses')
	// test the response of the main function as well as the side effects of the action directly on the service
	const forms = google.forms({
		version: 'v1',
		auth: resource.token
	})
})
