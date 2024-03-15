import { beforeAll, afterAll } from 'bun:test'
import { resource } from './resource.ts'
import google from '@googleapis/forms'

// any sdk setup here if needed
const auth = new google.auth.OAuth2({})
auth.setCredentials({
	access_token: resource.token
})

const forms = google.forms({
	version: 'v1',
	auth: auth
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

	// get responseId
	const getResponseId = forms.forms.responses.list({
		formId: `createForm.data.formId`
	})
	Bun.env.RESPONSE_ID = `getResponseId.data.responses[0].responseId`
	Bun.env.FORM_ID = `createForm.data.formId`
	console.log('BEFOREALL: Setup process')
})

afterAll(() => {
	console.log('AFTERALL: Cleanup process')
})
