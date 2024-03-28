import { expect, test } from 'bun:test'
import { main } from './script.bun.ts'
import { resource } from '../resource.ts'

test('Delete Mailing List Member', async () => {
	// Create a mailing list
	const createMailingListFormData = new FormData()
	createMailingListFormData.append('address', `test@${resource.domain}`)
	createMailingListFormData.append('name', 'Test')
	createMailingListFormData.append('description', 'Test List')

	await fetch(`${resource.baseUrl}/lists`, {
		method: 'POST',
		headers: {
			Authorization: 'Basic ' + Buffer.from(`api:${resource.apiKey}`).toString('base64')
		},
		body: createMailingListFormData
	})

	// Create a mailing list member
	const memberFormData = new FormData()
	memberFormData.append('address', 'test@example.com')
	memberFormData.append('name', 'Test')
	memberFormData.append('subscribed', 'true')
	memberFormData.append('upsert', 'true')

	await fetch(`${resource.baseUrl}/lists/test@${resource.domain}/members`, {
		method: 'POST',
		headers: {
			Authorization: 'Basic ' + Buffer.from(`api:${resource.apiKey}`).toString('base64')
		},
		body: memberFormData
	})

	// Delete the mailing list member
	const response = (await main(resource, {
		listAddress: `test@${resource.domain}`,
		memberAddress: 'test@example.com'
	})) as any

	expect(response).toBeDefined()
	expect(response.message).toBeDefined()

	// Try fetching the member again to see if it was deleted
	const fetchMemberResponse = await fetch(
		`${resource.baseUrl}/lists/test@${resource.domain}/members/test@example.com`,
		{
			headers: {
				Authorization: 'Basic ' + Buffer.from(`api:${resource.apiKey}`).toString('base64')
			}
		}
	)
	expect(fetchMemberResponse.status).toBe(404)

	// Delete the mailing list
	await fetch(`${resource.baseUrl}/lists/test@${resource.domain}`, {
		method: 'DELETE',
		headers: {
			Authorization: 'Basic ' + Buffer.from(`api:${resource.apiKey}`).toString('base64')
		}
	})
})
