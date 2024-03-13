import { expect, test } from 'bun:test'
import { main } from './script.bun.ts'
import { resource } from '../resource.ts'
import { createClient } from '@typeform/api-client'

test('Delete Form', async () => {
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
	await main(resource, form.id!)

	// Fetch the form
	try {
		await typeformAPI.forms.get({ uid: form.id! })
	} catch (error) {
		expect(error).toBeDefined()
	}
})
