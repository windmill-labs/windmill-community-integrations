import { expect, test } from 'bun:test'
import { main } from './script.bun.ts'
import { resource } from '../resource.ts'
import { google } from '@googleapis/forms'

test('Get Form Response', async () => {
	// script arguments
	const formId = Bun.env.FORM_ID!
	const responseId = Bun.env.RESPONSE_ID!
	console.log(`TEST: Will test Get Form Response with arguments: ${formId} ${responseId}`)

	// calling main
	console.log('TEST: Running main function')
	const response = await main(resource, formId, responseId)

	// assertions here
	expect(response).toBe('Get Form Response')
	// test the response of the main function as well as the side effects of the action directly on the service
	const forms = google.forms({
		version: 'v1',
		auth: resource.token
	})
})
