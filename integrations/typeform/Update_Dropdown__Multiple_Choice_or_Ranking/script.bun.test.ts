import { expect, test } from 'bun:test'
import { main } from './script.bun.ts'
import { resource } from '../resource.ts'
import { createClient } from '@typeform/api-client'

test('Update Dropdown, Multiple Choice or Ranking', async () => {
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

	form._links = undefined

	// Create a dropdown question
	await main(resource, {
		...form,
		id: form.id!,
		fields: [
			{
				title: 'My new dropdown question',
				type: 'dropdown',
				properties: {
					choices: [
						{
							label: 'Option 1'
						},
						{
							label: 'Option 2'
						}
					]
				}
			}
		]
	})

	// Fetch the form
	const updatedForm = await typeformAPI.forms.get({ uid: form.id! })
	expect(updatedForm).toBeDefined()
	expect(updatedForm.fields).toBeDefined()
	expect(updatedForm.fields).toHaveLength(1)
	expect(updatedForm.fields![0].title).toBe('My new dropdown question')

	// Delete the form
	await typeformAPI.forms.delete({ uid: form.id! })
})
