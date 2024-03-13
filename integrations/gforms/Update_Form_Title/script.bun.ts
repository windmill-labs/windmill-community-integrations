import { google } from '@googleapis/forms'

type Gforms = {
	token: string
}

export async function main(resource: Gforms, formId: string, title: string) {
	// setup auth
	const forms = google.forms({
		version: 'v1',
		auth: resource.token
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

	return `Form title updated to ${title} in form ${formId}`
}
