import { createClient } from '@typeform/api-client'

type Typeform = {
	typeformToken: string
	baseUrl: string
}

type Data = {
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

export async function main(resource: Typeform, data: Data) {
	const typeformAPI = createClient({
		token: resource.typeformToken,
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
