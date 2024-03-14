import { expect, test } from 'bun:test'
import { main } from './script.bun.ts'
import { resource } from '../resource.ts'
import { createClient } from '@typeform/api-client'

test('List Forms', async () => {
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

	const response = await main(resource, {})
	expect(response).toBeDefined()
	expect(response.total_items).toBeGreaterThan(0)

	// Delete the form
	await typeformAPI.forms.delete({ uid: form.id! })
})
