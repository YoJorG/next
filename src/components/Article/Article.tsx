import Image from 'next/image'
import parse, { domToReact, HTMLReactParserOptions, Element } from 'html-react-parser'
import type { PostData } from '@/src/types'
import CardPost from '../CardPost/CardPost'

const options: HTMLReactParserOptions = {
	replace: (domNode) => {
		if (domNode instanceof Element) {
			switch (domNode.name) {
				case 'p':
					return (
						<p className='text-gray-800 first:italic first:text-gray-700 first:text-2xl'>
							{domToReact(domNode.children, options)}
						</p>
					)
				case 'h2':
					return <h2 className='text-3xl text-gray-900 mb-4 mt-8 font-bold'>{domToReact(domNode.children, options)}</h2>
				case 'h3':
					return <h3 className='text-2xl text-gray-900 mb-2 mt-8 font-bold'>{domToReact(domNode.children, options)}</h3>
				case 'h4':
					return <h4 className='text-xl text-gray-900 font-bold'>{domToReact(domNode.children, options)}</h4>
				case 'h5':
					return <h5 className='text-lg text-gray-900 font-bold'>{domToReact(domNode.children, options)}</h5>
				case 'h6':
					return <h6 className='text-base text-gray-900 font-bold'>{domToReact(domNode.children, options)}</h6>
				case 'hr':
					return <hr className='my-8' />
			}
		}
	},
}

function Article({ image, postData }: { image: String; postData: PostData }) {
	const articleContent = parse(postData.article, options)
	const url = process.env.STRAPI_URL

	const tags = postData.seo.keywords.split(',').map((key) => key.trimStart())
	const relatedPosts = postData.relatedPosts.blogPosts.data
	const date = new Date(postData.publishedAt).toLocaleDateString('pl-PL')

	return (
		<>
			<main>
				<article>
					<header className='mx-auto max-w-screen-xl pt-40 text-center '>
						<p className='text-gray-500'>Opublikowano {date}</p>
						<h1 className='mt-2 text-3xl font-bold text-gray-900 sm:text-5xl'>{postData.title}</h1>
						<div className='mt-6 flex flex-wrap justify-center gap-2' aria-label='Tags'>
							{tags.map((key) => (
								<button
									className='rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200'
									key={key}
								>
									{key}
								</button>
							))}
						</div>
						<div className='w-full flex justify-center px-2'>
							<div className='max-w-5xl rounded-md overflow-hidden mt-10'>
								<Image
									className='sm:h-[34rem] w-full object-cover '
									src={url! + image}
									alt='Featured Image'
									width={1920}
									height={1080}
								/>
							</div>
						</div>
					</header>
					<div className='mx-auto max-w-screen-md space-y-12 px-4 py-10 font-serif text-lg tracking-wide text-gray-700'>
						<div className='max-w-4xl '>{articleContent}</div>
					</div>
				</article>
			</main>
			<div className='w-fit mx-auto mt-10 flex space-x-2'>
				<div className='h-0.5 w-2 bg-gray-600' />
				<div className='h-0.5 w-32 bg-gray-600' />
				<div className='h-0.5 w-2 bg-gray-600' />
			</div>
			<aside aria-label='Related Articles' className='mx-auto mt-10 max-w-screen-xl py-20'>
				<h2 className='mb-8 text-center text-3xl font-bold text-gray-900'>{postData.relatedPosts.title}</h2>
				<ul className='mx-auto grid max-w-screen-lg justify-center px-4 sm:grid-cols-2 sm:gap-6 sm:px-8 md:grid-cols-3'>
					{relatedPosts.map(({ id, attributes }) => (
						<CardPost key={id} {...attributes} />
					))}
				</ul>
			</aside>
		</>
	)
}

export default Article
