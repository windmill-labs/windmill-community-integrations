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
