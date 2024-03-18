import { expect, test } from 'bun:test'
import { main } from './script.bun.ts'
import { resource } from '../resource.ts'
import axios from 'axios'

test('Submit a Post', async () => {
	// script arguments here (also load environment variables if needed using Bun.env.VARIABLE_NAME!)

	console.log('TEST: Will test Submit a Post with arguments: ' /* arguments */)

	// any setup code here

	// calling main
	console.log('TEST: Running main function')
	const { json } = await main(
		resource,
		'Test_Posts',
		'test_post_title',
		'Test_Posts_Content',
		'self'
	)

	// assertions here
	// test the response of the main function as well as the side effects of the action directly on the service
	expect(json.data.url).toContain('test_post_title')
	
	// Check if the post was added to the subreddit
	await new Promise((resolve) => setTimeout(resolve, 2500))
	let postId = json?.data?.name // name is the id prefixed with 't3_'
	const response = await getPostInfo(resource, 'Test_Posts', postId)
	expect(response.data.children[0].data.name).toBe(postId)
})

type Reddit = {
	clientId: string
	clientSecret: string
	username: string
	password: string
	userAgent?: string
}

async function getPostInfo(resource: Reddit, subreddit: string, postId: string) {
	const endpoint = '/api/info'
	const params = { id: postId, sr_name: subreddit }
	return await makeRequest(resource, endpoint, { params })
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
