import { createClient } from '@typeform/api-client'

type Typeform = {
	token: string
	baseUrl: string
}

export async function main(resource: Typeform, formId: string) {
	const typeformAPI = createClient({
		token: resource.token,
		apiBaseUrl: resource.baseUrl
	})

	// Get the form
	const form = await typeformAPI.forms.get({ uid: formId })

	// Update the title of the form
	const title = form.title + ' (copy)'

	// Create a copy of the form
	return await typeformAPI.forms.create({
		data: {
			...form,
			title
		}
	})
}
