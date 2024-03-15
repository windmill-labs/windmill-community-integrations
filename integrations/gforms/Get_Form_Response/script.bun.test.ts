import { expect, test } from 'bun:test'
import { main } from './script.bun.ts'
import { resource } from '../resource.ts'

test('Get Form Response', async () => {
	// script arguments
	const formId = Bun.env.FORM_ID!
	const responseId = Bun.env.RESPONSE_ID!
	console.log(`TEST: Will test Get Form Response with arguments: ${formId} ${responseId}`)

	// calling main
	console.log('TEST: Running main function')
	const response = await main(resource, formId, responseId)

	// assertions here
	expect(response.formId).toBe(formId)
	expect(response.responseId).toBe(responseId)
})
