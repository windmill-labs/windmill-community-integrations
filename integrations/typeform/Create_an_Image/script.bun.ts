import { createClient } from '@typeform/api-client'

type Typeform = {
	typeformToken: string
	baseUrl: string
}

type Data = {
	image: string
	url: string
	fileName: string
}

export async function main(resource: Typeform, data: Data) {
	const typeformAPI = createClient({
		token: resource.typeformToken,
		apiBaseUrl: resource.baseUrl
	})

	return await typeformAPI.images.add({ ...data })
}
