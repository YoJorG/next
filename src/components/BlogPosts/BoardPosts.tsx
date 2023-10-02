import CardPost from '@/src/components/CardPost/CardPost'
import type { Blog } from '@/src/types'

function BoardPosts({ title, blogPosts }: Blog) {
	return (
		<section className='container mx-auto flex flex-col items-center py-16'>
			<h2 className='text-blue-600 font-bold text-2xl mb-8 before:w-full before:h-1 before:left-0 before:-bottom-0 before:border-b-2 before:border-blue-400 before:absolute relative before:bg-blue-600 inline-block '>
				{title}
			</h2>
			<div className='w-full'>
				<ul className='flex flex-wrap items-center justify-evenly gap-y-10 w-full px-2'>
					{blogPosts.data.map(({ id, attributes }) => (
						<CardPost key={id} {...attributes} />
					))}
				</ul>
			</div>
		</section>
	)
}

export default BoardPosts
