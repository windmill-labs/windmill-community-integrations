import { expect, test } from 'bun:test'
import { main } from './script.bun.ts'
import { resource } from '../resource.ts'
import { createClient } from '@typeform/api-client'

test('Duplicate a Form', async () => {
	// const typeformAPI = createClient({
	// 	token: resource.token,
	// 	apiBaseUrl: resource.baseUrl
	// })
	// // Create a form to duplicate
	// const form = await typeformAPI.forms.create({
	// 	data: {
	// 		title: 'New form'
	// 	}
	// })
	// // Run the script
	// const response = await main(resource, form.id!)
	// expect(response).toBeDefined()
	// expect(response.title).toBe('New form (copy)')
	// expect(response.id).toBeDefined()
	// // Fetch the form
	// const formCopy = await typeformAPI.forms.get({ uid: response.id! })
	// expect(formCopy).toBeDefined()
	// expect(formCopy.title).toBe('New form (copy)')
	// expect(formCopy.id).toBe(response.id!)
	// // Delete the form
	// await typeformAPI.forms.delete({ uid: response.id! })
})
