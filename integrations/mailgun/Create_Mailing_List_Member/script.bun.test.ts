import { expect, test } from 'bun:test'
import { main } from './script.bun.ts'
import { resource } from '../resource.ts'

test('Create Mailing List Member', async () => {
	// Create a mailing list
	const createMailingListFormData = new FormData()
	createMailingListFormData.append('address', `test@${resource.domain}`)
	createMailingListFormData.append('name', 'Test')
	createMailingListFormData.append('description', 'Test List')

	const createMailingListResponse = await fetch(`${resource.baseUrl}/lists`, {
		method: 'POST',
		headers: {
			Authorization: 'Basic ' + Buffer.from(`api:${resource.apiKey}`).toString('base64')
		},
		body: createMailingListFormData
	})
	const list = ((await createMailingListResponse.json()) as any).list as any

	expect(list).toBeDefined()
	expect(list.address).toBe(`test@${resource.domain}`)

	// Create a mailing list member
	const response = (await main(resource, {
		listAddress: list.address,
		member: {
			address: 'test@example.com',
			name: 'Test',
			subscribed: true,
			upsert: true
		}
	})) as any
	expect(response).toBeDefined()
	expect(response.message).toBe('Mailing list member has been created')
	expect(response.member).toBeDefined()

	// Delete the mailing list
	const deleteMailingListResponse = await fetch(`${resource.baseUrl}/lists/${list.address}`, {
		method: 'DELETE',
		headers: {
			Authorization: 'Basic ' + Buffer.from(`api:${resource.apiKey}`).toString('base64')
		}
	})
	await deleteMailingListResponse.json()
})
