import { expect, test } from 'bun:test'
import { main } from './script.bun.ts'
import { resource } from '../resource.ts'

test('List Domains', async () => {
	// List all domains
	const response = (await main(resource, {})) as any
	expect(response).toBeDefined()
	expect(response.total_count).toBe(1)
	expect(response.items).toBeDefined()
	expect(response.items[0].name).toBe(resource.domain)
})
