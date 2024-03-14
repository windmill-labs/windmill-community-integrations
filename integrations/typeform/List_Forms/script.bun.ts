import { createClient } from '@typeform/api-client'

type Typeform = {
	token: string
	baseUrl: string
}

export async function main(
	resource: Typeform,
	data: {
		search?: string
		page?: number
		pageSize?: number
		workspaceId?: string
	}
) {
	const typeformAPI = createClient({
		token: resource.token,
		apiBaseUrl: resource.baseUrl
	})

	return await typeformAPI.forms.list({
		search: data.search,
		page: data.page ?? 1,
		pageSize: data.pageSize ?? 10,
		workspaceId: data.workspaceId
	})
}
