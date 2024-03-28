type Mailgun = {
	apiKey: string
	domain: string
	baseUrl?: string
}

export async function main(
	resource: Mailgun,
	data: {
		from: string
		to: string
		subject: string
		html: string
		recipient_variables?: string
		template?: string
		cc?: string
		bcc?: string
		text?: string
		amp_html?: string
		attachment?: string
		inline?: string
		'o:tracking-opens'?: string
		't:version'?: string
		't:text'?: string
		't:variables'?: string
		'o:tag'?: string
		'o:dkim'?: string
		'o:deliverytime'?: string
		'o:deliverytime-optimize-period'?: string
		'o:time-zone-localize'?: string
		'o:testmode'?: string
		'o:tracking'?: string
		'o:tracking-clicks'?: string
		'o:require-tls'?: string
		'o:skip-verification'?: string
		others?: Record<string, string>
	}
) {
	const form = new FormData()
	form.append('from', data.from)
	form.append('to', data.to)
	form.append('subject', data.subject)
	form.append('html', data.html)
	data.recipient_variables && form.append('recipient-variables', data.recipient_variables)
	data.template && form.append('template', data.template)
	data.cc && form.append('cc', data.cc)
	data.bcc && form.append('bcc', data.bcc)
	data.text && form.append('text', data.text)
	data.amp_html && form.append('amp-html', data.amp_html)
	data.attachment && form.append('attachment', data.attachment)
	data.inline && form.append('inline', data.inline)
	data['o:tracking-opens'] && form.append('o:tracking-opens', data['o:tracking-opens'])
	data['t:version'] && form.append('t:version', data['t:version'])
	data['t:text'] && form.append('t:text', data['t:text'])
	data['t:variables'] && form.append('t:variables', data['t:variables'])
	data['o:tag'] && form.append('o:tag', data['o:tag'])
	data['o:dkim'] && form.append('o:dkim', data['o:dkim'])
	data['o:deliverytime'] && form.append('o:deliverytime', data['o:deliverytime'])
	data['o:deliverytime-optimize-period'] &&
		form.append('o:deliverytime-optimize-period', data['o:deliverytime-optimize-period'])
	data['o:time-zone-localize'] && form.append('o:time-zone-localize', data['o:time-zone-localize'])
	data['o:testmode'] && form.append('o:testmode', data['o:testmode'])
	data['o:tracking'] && form.append('o:tracking', data['o:tracking'])
	data['o:tracking-clicks'] && form.append('o:tracking-clicks', data['o:tracking-clicks'])
	data['o:require-tls'] && form.append('o:require-tls', data['o:require-tls'])
	data['o:skip-verification'] && form.append('o:skip-verification', data['o:skip-verification'])
	Object.entries(data.others || {}).forEach(([key, value]) => form.append(key, value))

	return (
		await fetch(`${resource.baseUrl}/${resource.domain}/messages`, {
			method: 'POST',
			headers: {
				Authorization: 'Basic ' + Buffer.from(`api:${resource.apiKey}`).toString('base64')
			},
			body: form
		})
	).json()
}
