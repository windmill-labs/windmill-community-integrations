export const resource = {
	apiKey: process.env.MAILGUN_API_KEY!,
	domain: process.env.MAILGUN_DOMAIN!,
	baseUrl: process.env.MAILGUN_BASE_URL ?? 'https://api.mailgun.net/v3'
}
