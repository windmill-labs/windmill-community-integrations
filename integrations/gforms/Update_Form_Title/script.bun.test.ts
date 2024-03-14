import { expect, test } from 'bun:test'
import { main } from './script.bun.ts'
import { resource } from '../resource.ts'
import google from '@googleapis/forms'

test('Update Form Title', async () => {
	// script arguments
	const formId = Bun.env.FORM_ID!
	const title = 'New Title'
	console.log(`TEST: Will test Update Form Title with arguments: ${formId} ${title}`)

	// calling main
	console.log('TEST: Running main function')
	const response = await main(resource, formId, title)

	// compare the title with the updated title
	const forms = google.forms({
		version: 'v1',
		auth: resource.token
	})

	const form = await forms.forms.get({ formId: formId })
	const updatedTitle = form.data.info.title

	// assertions here
	expect(title).toEqual(updatedTitle)
})
