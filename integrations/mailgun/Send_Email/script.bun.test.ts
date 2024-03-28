import { expect, test } from 'bun:test'
import { main } from './script.bun.ts'
import { resource } from '../resource.ts'

test('Send Email', async () => {
	// Send a mail
	const response = (await main(resource, {
		from: Bun.env.TEST_MAIL!,
		to: Bun.env.TEST_MAIL!,
		subject: 'Test',
		html: '<p>Test</p>'
	})) as any
	expect(response).toBeDefined()
	expect(response.id).toBeDefined()
	expect(response.message).toBeDefined()
})
