type Mailgun = {
	apiKey: string
	domain: string
	baseUrl?: string
}

export async function main(
	resource: Mailgun,
	data: {
		listAddress: string
		memberAddress: string
	}
) {
	return (
		await fetch(`${resource.baseUrl}/lists/${data.listAddress}/members/${data.memberAddress}`, {
			method: 'GET',
			headers: {
				Authorization: 'Basic ' + Buffer.from(`api:${resource.apiKey}`).toString('base64')
			}
		})
	).json()
}
