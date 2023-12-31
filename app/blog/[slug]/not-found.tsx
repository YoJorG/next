import Link from 'next/link'

export default function NotFound() {
	return (
		<div className='h-screen flex items-center justify-center flex-col text-center px-2'>
			<h2 className='text-3xl md:text-4xl font-bold'>Nie znaleziono</h2>
			<h3 className='text-xl md:text-2xl'>Niestety taki artykuł nie istniał bądź został usunięty</h3>
			<hr className='bg-red-500' />
			<div className='flex pt-4'>
				<p>
					<span>Wróć do</span>
					<Link href='/blog' className='text-blue-400 px-1 underline'>
						postów
					</Link>
					<span>lub na</span>
					<Link href='/' className='text-blue-400 px-1 underline'>
						Strone główną
					</Link>
				</p>
			</div>
		</div>
	)
}
