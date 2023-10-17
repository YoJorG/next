import BoardPosts from '@/src/components/BlogPosts/BoardPosts'
import Header from '@/src/components/Header/Header'
import OfferCards from '@/src/components/OffersCards/OffersCards'
import fetchAPI from '@/src/utils/fetchApi'
import type { Blog, Offers } from '@/src/types'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const DynamicContactForm = dynamic(() => import('@/src/components/ContactForm/ContactForm'))

const queryApi = `query Home {
		home {
			data {
				id
				attributes {
					faturedPosts {
						blogPosts {
							data {
								id
								attributes {
									title
									slug
									image {
										data {
											attributes {
												name
												formats
											}
										}
									}
									description
								}
							}
						}
						title
					}
					offers {
						id
						normal {
							id
							title
							price
							values {
								id
								value
								active
							}
						}
						special {
							id
							title
							price
							values {
								id
								value
								active
							}
						}
						premium {
							id
							title
							price
							values {
								id
								value
								active
							}
						}
					}
					header {
						id
						title
						description
					}
				}
			}
		}
	}`

type Header = { id: string; title: string; description: string }

type HomeData = {
	header: Header
	offers: Offers
	faturedPosts: Blog
}
const getHomePageData = async () => {
	try {
		const { data } = await fetchAPI(queryApi)
		const postData = data.home.data.attributes
		const { header, offers, faturedPosts } = postData

		return { header, offers, faturedPosts } as HomeData
	} catch (err) {
		console.log('ERROR DURING FETCH REQUEST', err)
	}
}

export default async function Home() {
	const { header, offers, faturedPosts } = (await getHomePageData()) as HomeData

	return (
		<>
			<head>
				<meta name='google-site-verification' content='ru6L6LIOw91niIdA1FANHbwvdRxvo01D1Og6ScDMZkk' />
			</head>
			<body>
				<>
					<Header {...header} />
					<main>
						<OfferCards {...offers} />
						<BoardPosts {...faturedPosts} />
						<DynamicContactForm />
					</main>
				</>
			</body>
		</>
	)
}
