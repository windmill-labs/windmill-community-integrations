import { expect, test } from 'bun:test'
import { main } from './script.bun.ts'
import { resource } from '../resource.ts'
import axios from 'axios'

test('Submit a Comment', async () => {
	// script arguments here (also load environment variables if needed using Bun.env.VARIABLE_NAME!)

	console.log('TEST: Will test Submit a Comment with arguments: ' /* arguments */)

	// any setup code here

	// calling main
	console.log('TEST: Running main function')
	const comment = 'Cute cat! :3'
	const parentId = 't1_kuqoibd'
	const { json } = await main(resource, parentId, comment)

	const commentId = json?.data?.things?.[0].data?.id
	const postId = json?.data?.things?.[0].data?.link_id

	// assertions here
	// test the response of the main function as well as the side effects of the action directly on the service
	expect(json.errors.length).toBe(0)
	expect(json?.data?.things?.[0].data?.body).toBe(comment)

	// Check if the comment was added to the post
	await new Promise((resolve) => setTimeout(resolve, 2500))
	const response = await getCommentsOnAPost(resource, postId, commentId)
	expect(response[1].data.children[0].data.id).toBe(commentId)
})

type Reddit = {
	clientId: string
	clientSecret: string
	username: string
	password: string
	userAgent?: string
}

async function getCommentsOnAPost(resource: Reddit, articleId: string, commentId?: string) {
	try {
		if (articleId.startsWith('t3_')) articleId = articleId.slice(3)
		const endpoint = `/comments/${articleId}`
		return await makeRequest(resource, endpoint, { params: { comment: commentId, context: '', depth: '' } })
	} catch (error) {
		console.error('Error getting comments:')
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
