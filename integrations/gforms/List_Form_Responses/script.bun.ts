import { google } from '@googleapis/forms'

type Gforms = {
	token: string
}

export async function main(resource: Gforms, formId: string) {
	// setup auth
	const forms = google.forms({
		version: 'v1',
		auth: resource.token
	})

	// list form responses
	const res = await forms.forms.responses.list({
		formId: formId
	})

	return res.data
}
