import { expect, test } from 'bun:test'
import { main } from './script.bun.ts'
import { resource } from '../resource.ts'
import { createClient } from '@typeform/api-client'

test('Get a Form', async () => {
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

	const response = await main(resource, form.id!)
	expect(response).toBeDefined()
	expect(response.id).toBe(form.id!)
	expect(response.title).toBe('My new form')

	// Delete the form
	await typeformAPI.forms.delete({ uid: form.id! })
})
