import axios from 'axios'

const fetchAPI = async (queryRequest: string, variables?: string) => {
	const headers = {
		'content-type': 'application/json',
		Authorization: process.env.STRAPI_API_TOKEN,
	}
	const options = {
		method: 'POST',
		url: process.env.STRAPI_API_URL,
		headers,
		data: {
			query: queryRequest,
			variables: {
				variable: variables,
			},
		},
	}
	try {
		const { data } = await axios(options)
		if (!data) {
			throw new Error('Data not found')
		}
		return data
	} catch (error) {
		console.error(error)
		throw new Error(`Please check if your server is running and you set all the required tokens.`)
	}
}

export default fetchAPI
