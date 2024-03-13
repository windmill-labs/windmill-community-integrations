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

	// create text question
	const textQuestion = {
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

	const res = await forms.forms.batchUpdate({
		formId: formId,
		requestBody: textQuestion
	})

	return `Text question created in form ${formId}`
}
