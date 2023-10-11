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
			<main className='container mx-auto flex flex-col items-center '>
				<h2 className='text-blue-600 font-bold text-2xl mb-8 before:w-full before:h-1 before:left-0 before:-bottom-0 before:border-b-2 before:border-blue-400 before:absolute relative before:bg-blue-600 inline-block pt-40 '>
					Wszystkie posty
				</h2>
				{posts ? (
					<ul className='grid gap-4 w-full sm:grid-cols-2 lg:grid-cols-4 place-items-center px-2 mb-8'>
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
