import { expect, test } from 'bun:test'
import { main } from './script.bun.ts'
import { resource } from '../resource.ts'
import { createClient } from '@typeform/api-client'

test('Delete an Image', async () => {
	const typeformAPI = createClient({
		token: resource.token,
		apiBaseUrl: resource.baseUrl
	})

	// Create an image to delete
	const image = await typeformAPI.images.add({
		fileName: 'newimage.gif',
		image:
			'iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAAG0lEQVR42mOccuMbA7mAcVTzqOZRzaOaB1YzABKjL70rq/b4AAAAAElFTkSuQmCC'
	})

	// Run the script
	await main(resource, image.id!)

	// Fetch the image
	try {
		await typeformAPI.images.get({ id: image.id! })
	} catch (error) {
		expect(error).toBeDefined()
	}
})
