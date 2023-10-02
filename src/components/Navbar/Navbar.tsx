import Link from 'next/link'
import Image from 'next/image'
export default function Navbar() {
	return (
		<div className='absolute z-50 w-full px-6'>
			<nav className='container mx-auto p-4 flex justify-between items-center'>
				<Link href={'/'} className='text-gray-600 font-bold text-xl '>
					<Image
						src={'/logo.png'}
						alt='Logo DriftLife'
						width={120}
						height={50}
						className='w-auto h-auto'
						priority={true}
					/>
				</Link>
				<div className='flex gap-6 '>
					<Link href={'/'} className='text-gray-700 font-bold hover:text-gray-300'>
						Home
					</Link>
					<Link href={'/#oferta'} className='text-gray-200 font-bold hover:text-gray-300'>
						Oferta
					</Link>
					<Link href={'/blog'} className='text-gray-200 font-bold hover:text-gray-300'>
						Blog
					</Link>
					<Link href={'/#kontakt'} className='text-gray-200 font-bold hover:text-gray-300'>
						Kontakt
					</Link>
				</div>
			</nav>
		</div>
	)
}
