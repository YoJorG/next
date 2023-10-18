'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { MenuSquare, XIcon } from 'lucide-react'

export default function Navbar() {
	const [menuState, setMenuState] = useState(false)
	const path = usePathname()

	const onTheHome = path === '/'

	const navigation = [
		{ title: 'Home', path: '/' },
		{ title: 'Oferta', path: '/#oferta' },
		{ title: 'Blog', path: '/blog' },
		{ title: 'Kontakt', path: '/#kontakt' },
	]

	return (
		<nav className={`w-full absolute top-0 md:text-sm z-50 md:bg-transparent ${menuState && 'bg-white'}`}>
			<div className='items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8 '>
				<div className='flex items-center justify-between py-3 md:py-5 md:block'>
					<Link href={'/'}>
						<Image
							src={'/logo.png'}
							alt='Logo DriftLife'
							width={120}
							height={50}
							className='w-auto h-auto p-2 pl-0'
							priority={true}
						/>
					</Link>

					<div className='md:hidden'>
						<button
							className='p-2 pr-0 '
							onClick={() => setMenuState(!menuState)}
							aria-label={menuState ? 'Zamknij menu' : 'Otwórz menu'}
						>
							{!menuState ? (
								<MenuSquare
									size={30}
									className={`text-blue-600 hover:text-blue-800 ${!onTheHome ? 'text-blue-500' : 'text-white'} `}
								/>
							) : (
								<XIcon size={30} className='text-blue-600 hover:text-blue-700 ' />
							)}
						</button>
					</div>
				</div>
				<div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${menuState ? 'block' : 'hidden'}`}>
					<ul className='justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0'>
						{navigation.map((item, idx) => {
							return (
								<li key={idx} onClick={() => setMenuState(false)}>
									<Link
										href={item.path}
										className={`text-blue-600 hover:text-blue-800  md:hover:text-blue-600 font-bold py-2 md:mx-0 text-lg ${
											!onTheHome ? 'md:text-blue-500' : 'md:text-white'
										}`}
									>
										{item.title}
									</Link>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		</nav>
	)
}
