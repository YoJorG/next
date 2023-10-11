'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { MenuSquare } from 'lucide-react'

export default function Sidebar() {
	const [openMenu, setOpenMenu] = useState(false)

	const toggleMenu = () => {
		setOpenMenu(!openMenu)
	}
	return (
		<div className='z-50 md:hidden sticky top-0'>
			<nav className='container mx-auto p-4 flex justify-between items-center absolute'>
				<Link href={'/'} className='text-gray-600 font-bold text-xl'>
					<Image
						src={'/logo.png'}
						alt='Logo DriftLife'
						width={120}
						height={50}
						className='w-auto h-auto'
						priority={true}
					/>
				</Link>

				<div className=''>
					<ul className='flex gap-6  '>
						<li>
							<Link href={'/'} className='text-gray-200 font-bold hover:text-blue-400'>
								Home
							</Link>
						</li>
						<li>
							<Link href={'/#oferta'} className='text-gray-200 font-bold hover:text-blue-400'>
								Oferta
							</Link>
						</li>
						<li>
							<Link href={'/blog'} className='text-gray-200 font-bold hover:text-blue-400'>
								Blog
							</Link>
						</li>
						<li>
							<Link href={'/#kontakt'} className='text-gray-200 font-bold hover:text-blue-400'>
								Kontakt
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	)
}
