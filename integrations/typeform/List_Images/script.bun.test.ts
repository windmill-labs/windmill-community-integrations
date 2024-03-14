import { expect, test } from 'bun:test'
import { main } from './script.bun.ts'
import { resource } from '../resource.ts'
import { createClient } from '@typeform/api-client'

test('List Images', async () => {
	const typeformAPI = createClient({
		token: resource.token,
		apiBaseUrl: resource.baseUrl
	})

	// Create an image
	const image = await typeformAPI.images.add({
		fileName: 'newimage.gif',
		image:
			'iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAAG0lEQVR42mOccuMbA7mAcVTzqOZRzaOaB1YzABKjL70rq/b4AAAAAElFTkSuQmCC'
	})

	// Run the script
	const response = await main(resource)
	expect(response).toBeDefined()
	expect(response.length).toBeGreaterThan(0)

	// Delete the image
	await typeformAPI.images.delete({ id: image.id! })
})
