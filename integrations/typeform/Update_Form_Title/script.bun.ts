import { createClient } from '@typeform/api-client'

type Typeform = {
	token: string
	baseUrl: string
}

export async function main(
	resource: Typeform,
	data: {
		formId: string
		title: string
	}
) {
	const typeformAPI = createClient({
		token: resource.token,
		apiBaseUrl: resource.baseUrl
	})

	return await typeformAPI.forms.update({
		uid: data.formId,
		override: false,
		data: [
			{
				op: 'replace',
				path: '/title',
				value: data.title
			}
		]
	})
}
