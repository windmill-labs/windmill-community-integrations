import google from '@googleapis/forms'

type Gforms = {
	token: string
}

export async function main(resource: Gforms, formId: string, responseId: string) {
	// setup auth
	const auth = new google.auth.OAuth2({})
	auth.setCredentials({
		access_token: resource.token
	})

	const forms = google.forms({
		version: 'v1',
		auth: auth
	})

	// get form response
	const res = await forms.forms.responses.get({
		formId: formId,
		responseId: responseId
	})

	return res.data
}
