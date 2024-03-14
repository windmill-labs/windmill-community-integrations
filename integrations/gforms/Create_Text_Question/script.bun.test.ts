import { expect, test } from 'bun:test'
import { main } from './script.bun.ts'
import { resource } from '../resource.ts'
import { google } from '@googleapis/forms'

test('Create Text Question', async () => {
	// script arguments
	const formId = Bun.env.FORM_ID!
	const index = 0
	console.log(`TEST: Will test Create Text Question with arguments: ${formId}`)

	// calling main
	console.log('TEST: Running main function')
	const response = await main(resource, formId, index)

	// assertions here
	expect(response.replies[0]).toBeDefined()
})
