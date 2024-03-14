import { expect, test } from 'bun:test'
import { main } from './script.bun.ts'
import { resource } from '../resource.ts'

/**
 * This test requires manual intervention to pass. Follow the steps below:
 * 1. Create a form in Typeform
 * 2. Set the TYPEFORM_MANUALLY_CREATED_FORM_ID environment variable to the form's ID
 * 3. Add a text answer based question to the form
 * 4. Publish the form
 * 5. As a response, type in the word "Testing"
 * 6. Run the test
 */
test('Lookup Responses', async () => {
	const response = await main(resource, {
		formId: process.env.TYPEFORM_MANUALLY_CREATED_FORM_ID!,
		query: 'Testing'
	})

	expect(response).toBeDefined()
	expect(response.total_items).toBeGreaterThan(0)
	expect(response.items[0].answers![0].text).toBe('Testing')
})
