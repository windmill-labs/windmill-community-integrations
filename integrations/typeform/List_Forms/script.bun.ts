import { createClient } from '@typeform/api-client'

type Typeform = {
	typeformToken: string
	baseUrl: string
}

type Data = {
	search?: string
	page?: number
	pageSize?: number
	workspaceId?: string
}

export async function main(resource: Typeform, data: Data) {
	const typeformAPI = createClient({
		token: resource.typeformToken,
		apiBaseUrl: resource.baseUrl
	})

	return await typeformAPI.forms.list({
		search: data.search,
		page: data.page ?? 1,
		pageSize: data.pageSize ?? 10,
		workspaceId: data.workspaceId
	})
}
