import qs from 'qs'
import axios from 'axios'

type Reddit = {
	clientId: string
	clientSecret: string
	username: string
	password: string
	userAgent?: string
}

export async function main(resource: Reddit, parentId: string, comment: string) {
	const endpoint = `/api/comment`
	const data = {
		api_type: 'json',
		text: comment,
		thing_id: parentId
	}

	return await makeRequest(resource, endpoint, {
		data: qs.stringify(data),
		method: 'POST'
	})
}

async function makeRequest(resource: Reddit, endpoint: string, options = {}) {
	try {
		const access_token = await getAccessToken(resource)
		const headers = {
			Authorization: `Bearer ${access_token}`,
			'User-Agent': resource.userAgent
		}
		const baseUrl = 'https://oauth.reddit.com'
		const url = `${baseUrl}${endpoint}`
		const response = await axios(url, {
			headers,
			...options
		})
		return response.data
	} catch (error: Error | any) {
		console.error(error.message)
	}
}

async function getAccessToken(resource: Reddit) {
	try {
		const auth = {
			username: resource.clientId,
			password: resource.clientSecret
		}
		const response = await axios.post('https://www.reddit.com/api/v1/access_token', null, {
			params: { grant_type: 'password', username: resource.username, password: resource.password },
			auth
		})
		return response?.data?.access_token
	} catch (error) {
		throw new Error('Error getting access token')
	}
}
