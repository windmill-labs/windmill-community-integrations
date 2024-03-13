export const resource = {
	baseUrl: process.env.TYPEFORM_BASE_URL ?? 'https://api.typeform.com',
	token: process.env.TYPEFORM_TOKEN!,
	manuallyCreatedFormId: process.env.TYPEFORM_MANUALLY_CREATED_FORM_ID!
}
