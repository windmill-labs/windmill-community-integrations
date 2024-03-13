import { expect, test } from 'bun:test'
import { main } from './script.bun.ts'
import { resource } from '../resource.ts'
import { createClient } from '@typeform/api-client'

test('Create a Form', async () => {
	const typeformAPI = createClient({
		token: resource.token,
		apiBaseUrl: resource.baseUrl
	})

	const response = await main(resource, {
		title: 'My first form'
	})

	expect(response).toBeDefined()
	expect(response.title).toBe('My first form')
	expect(response.id).toBeDefined()

	// Fetch the form
	const form = await typeformAPI.forms.get({ uid: response.id! })
	expect(form).toBeDefined()
	expect(form.title).toBe('My first form')
	expect(form.id).toBe(response.id!)

	// Delete the form
	await typeformAPI.forms.delete({ uid: response.id! })
})
