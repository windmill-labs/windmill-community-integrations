import { expect, test } from 'bun:test'
import { main } from './script.bun.ts'
import { resource } from '../resource.ts'
import { createClient } from '@typeform/api-client'

test('List Responses', async () => {
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

	// // Create a response
	// const response = await typeformAPI.responses.({
	//   uid: form.id!,
	//   token: resource.token,
	//   lander: {
	//     referrer: 'http://localhost:3000',
	//     platform: 'other'
	//   },
	//   answers: [
	//     {
	//       field: {
	//         id: 'short_text',
	//         type: 'short_text'
	//       },
	//       type: 'text',
	//       text: 'Hello'
	//     }
	//   ]
	// })
	// const response = await main(resource /* script arguments */)

	// assertions here
	// test the response of the main function as well as the side effects of the action directly on the service
})
