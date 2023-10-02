import Link from 'next/link'
import Image from 'next/image'

type IHeader = {
	title: string
	description: string
}

function Header({ title, description }: IHeader) {
	return (
		<header className=' text-green-50 relative'>
			<Image
				src={'/background.jpg'}
				alt='background image'
				className='-z-50 '
				layout='fill'
				objectFit='cover'
				priority={true}
			/>
			<div className='w-full h-screen bg-black opacity-60 absolute top-0 -z-40'></div>
			<div className='container mx-auto px-6  '>
				<div className='flex flex-col items-center justify-center text-center h-screen'>
					<h1 className='mb-3 text-4xl font-bold'>{title}</h1>
					<p className='mb-6 text-lg max-w-lg text-gray-100'>{description}</p>
					<Link
						href={'#offer'}
						className='px-4 py-2 border-gray-200 border rounded-md hover:bg-white hover:bg-opacity-20'
					>
						Sprawdź oferte
					</Link>
				</div>
			</div>
		</header>
	)
}

export default Header
