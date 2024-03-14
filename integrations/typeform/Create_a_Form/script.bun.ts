import { createClient } from '@typeform/api-client'

type Typeform = {
	token: string
	baseUrl: string
}

export async function main(
	resource: Typeform,
	data: {
		id?: string
		title?: string
		language?:
			| 'en'
			| 'es'
			| 'ca'
			| 'fr'
			| 'de'
			| 'ru'
			| 'it'
			| 'da'
			| 'pt'
			| 'ch'
			| 'zh'
			| 'nl'
			| 'no'
			| 'uk'
			| 'ja'
			| 'ko'
			| 'hr'
			| 'fi'
			| 'sv'
			| 'pl'
			| 'el'
			| 'hu'
			| 'tr'
			| 'cs'
			| 'et'
			| 'di'
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
		hidden?: string[]
		welcome_screens?: {
			ref?: string
			title?: string
			properties?: {
				description?: string
				show_button?: boolean
				button_text?: string
			}
			attachment?: {
				type?: 'image' | 'video'
				href?: string
				scale?: 0.4 | 0.6 | 0.8 | 1
			}
		}[]
		thankyou_screens?: {
			ref?: string
			title?: string
			properties?: {
				show_button?: boolean
				button_text?: string
				button_mode?: 'reload' | 'redirect'
				redirect_url?: string
				share_icons?: boolean
			}
			attachment?: {
				type?: 'image' | 'video'
				href?: string
				scale?: 0.4 | 0.6 | 0.8 | 1
			}
		}[]
		logic?: {
			type?: 'field' | 'hidden'
			actions?: {
				action?: 'jump' | 'add' | 'subtract' | 'multiply' | 'divide'
				details?: {
					to?: {
						type?: 'field' | 'hidden' | 'thankyou'
						value?: string
					}
					target?: {
						type?: 'variable'
						value?: 'score' | 'price'
					}
					value?: {
						type?: 'constant'
						value?: number
					}
				}
				condition?:
					| {
							op?:
								| 'begins_with'
								| 'ends_with'
								| 'contains'
								| 'not_contains'
								| 'lower_than'
								| 'lower_equal_than'
								| 'greater_than'
								| 'greater_equal_than'
								| 'is'
								| 'is_not'
								| 'equal'
								| 'not_equal'
								| 'always'
								| 'on'
								| 'not_on'
								| 'earlier_than'
								| 'earlier_than_or_on'
								| 'later_than'
								| 'later_than_or_on'
							vars?: {
								type?: 'field' | 'hidden' | 'variable' | 'constant' | 'end' | 'choice'
								value?: any
							}[]
					  }
					| {
							op?: 'and' | 'or'
							vars: Array<any>
					  }
			}[]
		}[]
		theme?:
			| {
					href?: string
			  }
			| string
		workspace?: {
			href?: string
		}
		_links?: {
			display?: string
		}
		settings?: {
			are_uploads_public?: boolean
			autosave_progress?: boolean
			free_form_navigation?: boolean
			hide_navigation?: boolean
			is_public?: boolean
			language?:
				| 'en'
				| 'es'
				| 'ca'
				| 'fr'
				| 'de'
				| 'ru'
				| 'it'
				| 'da'
				| 'pt'
				| 'ch'
				| 'zh'
				| 'nl'
				| 'no'
				| 'uk'
				| 'ja'
				| 'ko'
				| 'hr'
				| 'fi'
				| 'sv'
				| 'pl'
				| 'el'
				| 'hu'
				| 'tr'
				| 'cs'
				| 'et'
				| 'di'
			meta?: {
				allow_indexing?: boolean
				description?: string
				image?: {
					href?: string
				}
			}
			pro_subdomain_enabled?: boolean
			progress_bar?: 'percentage' | 'proportion'
			show_cookie_consent?: boolean
			show_key_hint_on_choices?: boolean
			show_number_of_submissions?: boolean
			show_progress_bar?: boolean
			show_question_number?: boolean
			show_time_to_complete?: boolean
			show_typeform_branding?: boolean
			use_lead_qualification?: boolean
			redirect_after_submit_url?: string
			google_analytics?: string
			facebook_pixel?: string
			google_tag_manager?: string
			notification?: {
				self?: {
					enabled?: boolean
					recipients?: string[]
					reply_to?: string
					subject?: string
					message?: string
				}
				respondent?: {
					enabled?: boolean
					recipient?: string
					reply_to?: string[]
					subject?: string
					message?: string
				}
			}
		}
		variables?: {
			score?: 0
			price?: number
		}
	}
) {
	const typeformAPI = createClient({
		token: resource.token,
		apiBaseUrl: resource.baseUrl
	})

	return await typeformAPI.forms.create({
		data
	})
}
