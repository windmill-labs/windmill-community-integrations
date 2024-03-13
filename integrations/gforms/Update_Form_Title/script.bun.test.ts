import { expect, test } from 'bun:test'
import { main } from './script.bun.ts'
import { resource } from '../resource.ts'
import { google } from '@googleapis/forms'

test('Update Form Title', async () => {
	// script arguments
	const formId = Bun.env.FORM_ID!
	const title = 'New Title'
	console.log(`TEST: Will test Update Form Title with arguments: ${formId} ${title}`)

	// calling main
	console.log('TEST: Running main function')
	const response = await main(resource, formId, title)

	// assertions here
	expect(response).toBe(`Form title updated to ${title} in form ${formId}`)
	// test the response of the main function as well as the side effects of the action directly on the service
	const forms = google.forms({
		version: 'v1',
		auth: resource.token
	})
})
