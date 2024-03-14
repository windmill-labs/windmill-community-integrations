import { google } from '@googleapis/forms'

type Gforms = {
	token: string
}

export async function main(resource: Gforms, title: string) {
	// setup auth
	const forms = google.forms({
		version: 'v1',
		auth: resource.token
	})

	// create new form
	const newForm = {
		info: {
			title: title
		}
	}

	const res = await forms.forms.create({
		requestBody: newForm
	})

	return res.data
}
