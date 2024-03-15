import google from '@googleapis/forms'

type Gforms = {
	token: string
}

export async function main(resource: Gforms, formId: string, title: string) {
	// setup auth
	const auth = new google.auth.OAuth2({})
	auth.setCredentials({
		access_token: resource.token
	})

	const forms = google.forms({
		version: 'v1',
		auth: auth
	})

	// update form title
	const updateFormTitle = {
		requests: [
			{
				updateFormInfo: {
					updateMask: '*',
					info: {
						title: title
					}
				}
			}
		]
	}

	const res = await forms.forms.batchUpdate({
		formId: formId,
		requestBody: updateFormTitle
	})

	return res.data
}
