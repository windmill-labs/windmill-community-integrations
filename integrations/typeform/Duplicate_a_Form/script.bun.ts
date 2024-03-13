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

	// // Get the form
	const form = await typeformAPI.forms.get({ uid: formId })

	if (!form.workspace) {
		throw new Error('Form not found')
	}

	// Create a copy of the form
	const newForm = await typeformAPI.forms.copy({
		uid: formId,
		workspaceHref: form.workspace!.href!
	})

	// Update the title of the new form
	await typeformAPI.forms.update({
		uid: newForm.id!,
		override: false,
		data: [
			{
				op: 'replace',
				path: '/title',
				value: `${form.title} (copy)`
			}
		]
	})

	newForm.title = `${form.title} (copy)`

	return newForm
}
