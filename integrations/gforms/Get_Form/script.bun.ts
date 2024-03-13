import { google } from 'googleapis'

type Gforms = {
	token: string
}

export async function main(resource: Gforms, formId: string) {
	// setup auth
	const forms = google.forms({
		version: 'v1',
		auth: resource.token
	})

	// get form
	const res = await forms.forms.get({
		formId: formId
	})

	return res.data
}
