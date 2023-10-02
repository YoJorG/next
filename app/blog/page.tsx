import CardPost from '@/src/components/CardPost/CardPost'
import fetchAPI from '@/src/utils/fetchApi'
import type { BlogPost } from '@/src/types'
import { notFound } from 'next/navigation'

const queryApi = `query BlogPosts {
		blogPosts {
			data {
				id
				attributes {
					title
					slug
					image {
						data {
							id
							attributes {
								alternativeText
								formats
								url
							}
						}
					}
					description
				}
			}
		}
	}
	`

const getBlogData = async () => {
	try {
		const { data } = await fetchAPI(queryApi)
		const posts: BlogPost[] = data.blogPosts.data
		return posts
	} catch (error) {
		console.error(error)
	}
}

export default async function Blog() {
	const posts = await getBlogData()
	return (
		<>
			<main className='container mx-auto '>
				<h1>Blog DriftLife!</h1>
				{posts ? (
					<ul className='grid gap-4 pt-40 w-full sm:grid-cols-2 lg:grid-cols-4 place-items-center px-2'>
						{posts.map(({ id, attributes }) => (
							<CardPost key={id} {...attributes} />
						))}
					</ul>
				) : (
					<p>Brak postów do wyświetlenia...</p>
				)}
			</main>
		</>
	)
}
