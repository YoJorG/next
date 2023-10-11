import type { FormData } from '@/src/components/ContactForm/ContactForm'
import axios from 'axios'

export async function sendEmail(data: FormData) {
	try {
		const request = await axios({
			method: 'POST',
			url: 'api/contact',
			data: {
				data,
			},
		})
		return request
	} catch (error) {
		console.error(error)
	}
}
