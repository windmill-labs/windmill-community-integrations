import { expect, test } from 'bun:test'
import { main } from './script.bun.ts'
import { resource } from '../resource.ts'
import { createClient } from '@typeform/api-client'

test('Update Form Title', async () => {
	const typeformAPI = createClient({
		token: resource.token,
		apiBaseUrl: resource.baseUrl
	})

	// Create a form
	const form = await typeformAPI.forms.create({
		data: {
			title: 'My new form'
		}
	})

	// Run the script
	const response = await main(resource, {
		formId: form.id!,
		title: 'New title'
	})

	// Fetch the form
	const updatedForm = await typeformAPI.forms.get({ uid: form.id! })
	expect(updatedForm.title).toBe('New title')

	// Delete the form
	await typeformAPI.forms.delete({ uid: form.id! })
})
