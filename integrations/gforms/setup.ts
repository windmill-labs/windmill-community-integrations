import { beforeAll, afterAll } from 'bun:test'
import { resource } from './resource.ts'
import google from '@googleapis/forms'

// any sdk setup here if needed
const auth = new google.auth.OAuth2({})
auth.setCredentials({
	access_token: resource.token
})

const forms = google.forms({
	version: 'v1',
	auth: auth
})

beforeAll(async () => {
	console.log('BEFOREALL: Setup process')
})

afterAll(() => {
	console.log('AFTERALL: Cleanup process')
})
