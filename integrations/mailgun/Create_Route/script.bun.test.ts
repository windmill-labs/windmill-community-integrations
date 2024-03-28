import { expect, test } from 'bun:test'
import { main } from './script.bun.ts'
import { resource } from '../resource.ts'

test('Create Route', async () => {
	// Create the route
	// 	const response = (await main(resource, {
	// 		priority: 0,
	// 		description: 'Test Route',
	// 		expression: "match_recipient('.*@gmail.com')",
	// 		action: ['forward("https://example.com")']
	// 	})) as any
	// 	expect(response).toBe({})
	// 	expect(response).toBeDefined()
	// 	expect(response.route.priority).toBe(0)
	// 	expect(response.route.description).toBe('Test Route')
	// 	// Fetch the route
	// 	const fetchResponse = await fetch(`${resource.baseUrl}/routes/${response.route.id}`, {
	// 		headers: {
	// 			Authorization: 'Basic ' + Buffer.from(`api:${resource.apiKey}`).toString('base64')
	// 		}
	// 	})
	// 	const fetchedRoute = (await fetchResponse.json()) as any
	// 	expect(fetchedRoute).toBeDefined()
	// 	expect(fetchedRoute.route.id).toBe(response.route.id)
	// 	// Delete the route
	// 	const deleteResponse = await fetch(`${resource.baseUrl}/routes/${response.route.id}`, {
	// 		method: 'DELETE',
	// 		headers: {
	// 			Authorization: 'Basic ' + Buffer.from(`api:${resource.apiKey}`).toString('base64')
	// 		}
	// 	})
	// 	await deleteResponse.json()
})
