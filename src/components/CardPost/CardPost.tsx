import Image from 'next/image'
import Link from 'next/link'
import type { BlogAttributes } from '@/src/types'

function CardPost({ title, slug, description, image }: BlogAttributes) {
	const img = image.data.attributes.formats.small
	return (
		<li className=' w-full max-w-xs border border-blue-600 rounded-md overflow-hidden'>
			<Link href={`blog/${slug}`} scroll={true}>
				<Image
					className='object-cover h-40'
					src={`http://192.168.0.22:1337${img.url}`}
					alt='blog-post'
					width={img.width}
					height={img.height}
				/>
				<div className='py-2 px-4'>
					<h3 className='text-lg font-bold text-gray-800 mt-1 line-clamp-2'>{title}</h3>
					<hr className='my-2' />
					<p className=' text-gray-700 line-clamp-3 mb-2'>{description}</p>
				</div>
			</Link>
		</li>
	)
}

export default CardPost
