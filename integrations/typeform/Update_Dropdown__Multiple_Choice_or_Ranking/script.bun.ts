import { createClient } from '@typeform/api-client'

type Typeform = {
	token: string
	baseUrl: string
}

export async function main(
	resource: Typeform,
	data: {
		id: string
		fields?: {
			id?: string
			ref?: string
			title?: string
			type?:
				| 'address'
				| 'calendly'
				| 'contact_info'
				| 'date'
				| 'dropdown'
				| 'email'
				| 'file_upload'
				| 'group'
				| 'legal'
				| 'long_text'
				| 'matrix'
				| 'multiple_choice'
				| 'nps'
				| 'number'
				| 'opinion_scale'
				| 'payment'
				| 'phone_number'
				| 'picture_choice'
				| 'ranking'
				| 'rating'
				| 'short_text'
				| 'statement'
				| 'website'
				| 'yes_no'
			properties?: {
				description?: string
				choices?: {
					id?: string
					ref?: string
					label?: string
					attachment?: {
						type?: 'image' | 'video'
						href?: string
						scale?: 0.4 | 0.6 | 0.8 | 1
					}
				}[]
				fields?: any[]
				allow_multiple_selection?: boolean
				randomize?: boolean
				allow_other_choice?: boolean
				vertical_alignment?: boolean
				supersized?: boolean
				show_labels?: boolean
				alphabetical_order?: boolean
				hide_marks?: boolean
				button_text?: string
				steps?: 5 | 6 | 7 | 8 | 9 | 10 | 11
				shape?:
					| 'cat'
					| 'circle'
					| 'cloud'
					| 'crown'
					| 'dog'
					| 'droplet'
					| 'flag'
					| 'heart'
					| 'lightbulb'
					| 'pencil'
					| 'skull'
					| 'star'
					| 'thunderbolt'
					| 'tick'
					| 'trophy'
					| 'up'
					| 'user'
				labels?: {
					left?: string
					right?: string
					center?: string
				}
				start_at_one?: boolean
				structure?: 'MMDDYYYY' | 'DDMMYYYY' | 'YYYYMMDD'
				separator?: '/' | '-' | '.'
				currency?:
					| 'AUD'
					| 'BRL'
					| 'CAD'
					| 'CHF'
					| 'DKK'
					| 'EUR'
					| 'GBP'
					| 'MXN'
					| 'NOK'
					| 'SEK'
					| 'USD'
			}
			validations?: {
				required?: boolean
				max_length?: number
				min_value?: number
				max_value?: number
			}
			attachment?: {
				type?: 'image' | 'video'
				href?: string
				scale?: 0.4 | 0.6 | 0.8 | 1
			}
		}[]
	}
) {
	const typeformAPI = createClient({
		token: resource.token,
		apiBaseUrl: resource.baseUrl
	})

	return await typeformAPI.forms.update({
		uid: data.id,
		override: false,
		// @ts-ignore
		data
	})
}
