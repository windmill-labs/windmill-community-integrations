import { createClient } from '@typeform/api-client'

type Typeform = {
	token: string
	baseUrl: string
}

export async function main(
	resource: Typeform,
	data: {
		formId: string
		pageSize?: number
		since?: string
		until?: string
		after?: string
		before?: string
		ids?: string[]
		fields?: string[]
		completed?: boolean
		sort?: string
		query?: string
	}
) {
	const typeformAPI = createClient({
		token: resource.token,
		apiBaseUrl: resource.baseUrl
	})

	return await typeformAPI.responses.list({
		uid: data.formId,
		pageSize: data.pageSize ?? 10,
		since: data.since,
		until: data.until,
		after: data.after,
		before: data.before,
		ids: data.ids,
		fields: data.fields,
		completed: data.completed,
		sort: data.sort,
		query: data.query
	})
}
