import google from '@googleapis/forms'

type Gforms = {
	token: string
}

export async function main(resource: Gforms, title: string) {
	// setup auth
	const auth = new google.auth.OAuth2({})
	auth.setCredentials({
		access_token: resource.token
	})

	const forms = google.forms({
		version: 'v1',
		auth: auth
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
