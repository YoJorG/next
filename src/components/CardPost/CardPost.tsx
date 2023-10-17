import Image from 'next/image'
import Link from 'next/link'
import type { BlogAttributes } from '@/src/types'

function CardPost({ title, slug, description, image }: BlogAttributes) {
	const img = image.data.attributes.formats.small
	const url = process.env.STRAPI_URL

	return (
		<li className=' w-full max-w-xs  rounded-md overflow-hidden shadow-sm animate-fade-up '>
			<article>
				<Link href={`/blog/${slug}`}>
					<Image
						className='object-cover h-40'
						src={url + img.url}
						alt='blog-post'
						width={img.width}
						height={img.height}
					/>
					<div className='py-2 px-4 border border-t-0'>
						<h3 className='text-lg font-bold text-gray-800 mt-1 line-clamp-2'>{title}</h3>
						<hr className='my-2' />
						<p className=' text-gray-700 line-clamp-3 mb-2'>{description}</p>
					</div>
				</Link>
			</article>
		</li>
	)
}

export default CardPost
