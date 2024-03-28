type Mailgun = {
	apiKey: string
	domain: string
	baseUrl?: string
}

export async function main(
	resource: Mailgun,
	data: {
		priority: number
		description: string
		expression: string
		action: string[]
	}
) {
	const form = new FormData()
	form.append('priority', data.priority)
	form.append('description', data.description)
	form.append('expression', data.expression)
	form.append('action', data.action)

	return (
		await fetch(`${resource.baseUrl}/routes`, {
			method: 'POST',
			headers: {
				Authorization: 'Basic ' + Buffer.from(`api:${resource.apiKey}`).toString('base64')
			},
			body: form
		})
	).json()
}
