type Mailgun = {
	apiKey: string
	domain: string
	baseUrl?: string
}

export async function main(
	resource: Mailgun,
	data: {
		listAddress: string
		member: {
			address: string
			name?: string
			vars?: Record<string, string>
			subscribed?: boolean
			upsert?: boolean
		}
	}
) {
	const form = new FormData()
	form.append('address', data.member.address)
	form.append('name', data.member.name || '')
	form.append('vars', data.member.vars ? JSON.stringify(data.member.vars) : '{}')
	form.append('subscribed', data.member.subscribed)
	form.append('upsert', data.member.upsert)

	return (
		await fetch(`${resource.baseUrl}/lists/${data.listAddress}/members`, {
			method: 'POST',
			headers: {
				Authorization: 'Basic ' + Buffer.from(`api:${resource.apiKey}`).toString('base64')
			},
			body: form
		})
	).json()
}
