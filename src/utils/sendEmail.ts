import { FormData } from '@/src/components/ContactForm/ContactForm'
import axios from 'axios'

export async function sendEmail(data: FormData) {
	const dataJson = JSON.stringify(data)
	try {
		const request = await axios({
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			url: 'api/contact',
			data: {
				data: dataJson,
			},
		})
	} catch (error) {}
}
