import { beforeAll, afterAll } from 'bun:test'
import { resource } from './resource.ts'
import { google } from '@googleapis/forms'

// any sdk setup here if needed
const forms = google.forms({
	version: 'v1',
	auth: resource.token
})

beforeAll(async () => {
	// create a form
	const createForm = await forms.forms.create({
		requestBody: {
			info: {
				title: 'Test Form'
			}
		}
	})

	const formId = createForm.data.formId

	// create a text question
	await forms.forms.batchUpdate({
		formId: formId,
		requestBody: {
			requests: [
				{
					createItem: {
						location: {
							index: 0
						},
						item: {
							questionItem: {
								question: {
									textQuestion: {
										paragraph: false
									}
								}
							}
						}
					}
				}
			]
		}
	})

	// get form
	await forms.forms.get({
		formId: formId
	})

	// list form responses
	const listFormResponse = await forms.forms.list({
		formId: formId
	})

	const responseId = listFormResponse.data.responses[0].responseId

	// get form responses
	await forms.forms.get({
		formId: formId,
		responseId: responseId
	})

	// update form title
	await forms.forms.batchUpdate({
		formId: formId,
		requestBody: {
			requests: [
				{
					updateFormInfo: {
						updateMask: '*',
						info: {
							title: 'New Form Title'
						}
					}
				}
			]
		}
	})

	console.log('BEFOREALL: Setup process')
})

afterAll(() => {
	console.log('AFTERALL: Cleanup process')
})
