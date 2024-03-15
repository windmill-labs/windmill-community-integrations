import { expect, test } from 'bun:test'
import { main } from './script.bun.ts'
import { resource } from '../resource.ts'
import google from '@googleapis/forms'

test('Update Form Title', async () => {
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
				title: 'Update Form Title'
			}
		}
	})

	// script arguments
	const formId = newForm.data.formId
	console.log(formId)
	const title = 'Updated New Title'
	console.log(`TEST: Will test Update Form Title with arguments: ${formId} ${title}`)

	// calling main
	console.log('TEST: Running main function')
	const response = await main(resource, formId, title)

	// compare the title with the updated title
	const form = await forms.forms.get({ formId: formId })
	const updatedTitle = form.data.info.title

	// assertions here
	expect(`title != ${updatedTitle}`).toBe(`title != ${title}`)
})
