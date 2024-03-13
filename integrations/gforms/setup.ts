import { beforeAll, afterAll } from 'bun:test'
import { resource } from './resource.ts'
import { google } from '@googleapis/forms'

// any sdk setup here if needed
const forms = google.forms({
	version: 'v1',
	auth: resource.token
})

// load environment variables if needed (that aren't in resource.ts)
const formId = Bun.env.FORM_ID!
const responseId = Bun.env.RESPONSE_ID!

beforeAll(async () => {
	// create a form
	await forms.forms.create({
		requestBody: {
			info: {
				title: 'Test Form'
			}
		}
	})
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
	// get form responses
	await forms.forms.get({
		formId: formId,
		responseId: responseId
	})
	// list form responses
	await forms.forms.list({
		formId: formId
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
	// delete form
	forms.forms.delete({
		formId: formId
	})
	console.log('AFTERALL: Cleanup process')
})
