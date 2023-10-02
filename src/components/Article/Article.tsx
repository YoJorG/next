import Image from 'next/image'
import parse, { domToReact, HTMLReactParserOptions, Element } from 'html-react-parser'
import type { PostData } from '@/src/types'
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
	return (
		<>
			<article className='container mx-auto pt-28'>
				<h1 className='text-4xl font-bold mb-4 mt-2 text-gray-900'>{postData.title}</h1>

				<div className='max-w-3xl aspect-video overflow-hidden'>
					<Image
						className='rounded-md object-cover max-w-3xl aspect-video w-full mb-20'
						src={url! + image}
						width={800}
						height={800}
						alt='test'
					/>
				</div>
				<div className='max-w-4xl mt-4 '>{articleContent}</div>
			</article>
		</>
	)
}

export default Article
