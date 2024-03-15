import google from '@googleapis/forms'

type Gforms = {
	token: string
}

export async function main(resource: Gforms, formId: string) {
	// setup auth
	const auth = new google.auth.OAuth2({})
	auth.setCredentials({
		access_token: resource.token
	})

	const forms = google.forms({
		version: 'v1',
		auth: auth
	})

	// list form responses
	const res = await forms.forms.responses.list({
		formId: formId
	})

	return res.data
}
