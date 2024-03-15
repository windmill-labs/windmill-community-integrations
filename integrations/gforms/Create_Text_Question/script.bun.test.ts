import { expect, test } from 'bun:test'
import { main } from './script.bun.ts'
import { resource } from '../resource.ts'
import google from '@googleapis/forms'

test('Create Text Question', async () => {
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
				title: 'Create Text Question'
			}
		}
	})

	// script arguments
	const formId = newForm.data.formId
	const index = 0
	const title = 'Title'
	const description = 'Description'
	const paragraph = false
	console.log(`TEST: Will test Create Text Question with arguments: ${formId}`)

	// calling main
	console.log('TEST: Running main function')
	const response = await main(resource, formId, index, title, description, paragraph)

	// assertions here
	expect(response.replies[0]).toBeDefined()
})
