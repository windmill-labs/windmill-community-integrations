import google from '@googleapis/forms'

type Gforms = {
	token: string
}

export async function main(
	resource: Gforms,
	formId: string,
	index: number = 0,
	title: string,
	description: string,
	paragraph: boolean = false
) {
	// setup auth
	const auth = new google.auth.OAuth2({})
	auth.setCredentials({
		access_token: resource.token
	})

	const forms = google.forms({
		version: 'v1',
		auth: auth
	})

	// create text question
	const textQuestion = {
		requests: [
			{
				createItem: {
					location: {
						index: index
					},
					item: {
						questionItem: {
							question: {
								textQuestion: {
									paragraph: paragraph
								}
							}
						},
						title: title,
						description: description
					}
				}
			}
		]
	}

	const res = await forms.forms.batchUpdate({
		formId: formId,
		requestBody: textQuestion
	})

	return res.data
}
