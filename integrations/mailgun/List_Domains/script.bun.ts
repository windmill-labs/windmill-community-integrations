type Mailgun = {
	apiKey: string
	domain: string
	baseUrl?: string
}

export async function main(
	resource: Mailgun,
	data: {
		limit?: number
		skip?: number
		state?: 'unverified' | 'active' | 'disabled'
		sort?: string
		authority?: string
		search?: string
	}
) {
	return (
		await fetch(
			`${resource.baseUrl}/domains?limit=${data.limit ?? 100}&skip=${data.skip ?? 0}&state=${
				data.state ?? 'active'
			}&sort=${data.sort ?? 'name'}${data.authority ?? '&authority'}&search=${data.search ?? ''}`,
			{
				method: 'GET',
				headers: {
					Authorization: 'Basic ' + Buffer.from(`api:${resource.apiKey}`).toString('base64')
				}
			}
		)
	).json()
}
