type Mailgun = {
	apiKey: string
	domain: string
	baseUrl?: string
}

export async function main(
	resource: Mailgun,
	data: {
		listAddress: string
		query: {
			address?: string
			subscribed?: boolean
			limit?: number
			skip?: number
		}
	}
) {
	return (
		await fetch(
			`${resource.baseUrl}/lists/${data.listAddress}/members?${
				data.query.address && `address=${data.query.address}`
			}${data.query.subscribed && `&subscribed=${data.query.subscribed}`}&limit=${
				data.query.limit ?? 100
			}&skip=${data.query.skip ?? 0}`,
			{
				method: 'GET',
				headers: {
					Authorization: 'Basic ' + Buffer.from(`api:${resource.apiKey}`).toString('base64')
				}
			}
		)
	).json()
}
