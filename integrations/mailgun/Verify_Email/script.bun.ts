type Mailgun = {
	apiKey: string
	domain: string
	baseUrl?: string
}

export async function main(
	resource: Mailgun,
	data: {
		address: string
		provider_lookup?: boolean
	}
) {
	return (
		await fetch(
			`${resource.baseUrl}/address/validate?address=${data.address}&provider_lookup=${
				data.provider_lookup ?? true
			}`,
			{
				method: 'POST',
				headers: {
					Authorization: 'Basic ' + Buffer.from(`api:${resource.apiKey}`).toString('base64')
				}
			}
		)
	).json()
}
