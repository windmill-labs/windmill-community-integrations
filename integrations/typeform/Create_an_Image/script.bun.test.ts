import { expect, test } from 'bun:test'
import { main } from './script.bun.ts'
import { resource } from '../resource.ts'
import { createClient } from '@typeform/api-client'

test('Create an Image', async () => {
	const typeformAPI = createClient({
		token: resource.token,
		apiBaseUrl: resource.baseUrl
	})

	const response = await main(resource, {
		fileName: 'newimage.gif',
		image:
			'iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAAG0lEQVR42mOccuMbA7mAcVTzqOZRzaOaB1YzABKjL70rq/b4AAAAAElFTkSuQmCC'
	})

	expect(response).toBeDefined()
	expect(response.id).toBeDefined()
	expect(response.file_name).toBe('newimage.gif')

	// Fetch the image
	const image = await typeformAPI.images.get({ id: response.id! })
	expect(image).toBeDefined()
	expect(image.id).toBe(response.id!)
	expect(image.file_name).toBe('newimage.gif')

	// Delete the image
	await typeformAPI.images.delete({ id: response.id! })
})
