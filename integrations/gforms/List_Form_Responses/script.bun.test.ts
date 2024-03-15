import { expect, test } from 'bun:test'
import { main } from './script.bun.ts'
import { resource } from '../resource.ts'
import google from '@googleapis/forms'

test('List Form Responses', async () => {
	// setup auth and create new form
	const auth = new google.auth.OAuth2({})
	auth.setCredentials({
		access_token: resource.token
	})
	const forms = google.forms({
		version: 'v1',
		auth: auth
	})

	const newForm = await forms.forms.create({
		requestBody: {
			info: {
				title: 'List Form Responses'
			}
		}
	})

	// script arguments
	const formId = newForm.data.formId
	console.log(`TEST: Will test List Form Responses with arguments: ${formId}`)

	// calling main
	console.log('TEST: Running main function')
	const response = await main(resource, formId)

	// assertions here
	expect(response).toBeEmpty()
})
