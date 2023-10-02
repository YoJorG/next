import Link from 'next/link'

export default function NotFound() {
	return (
		<div>
			<h2>Nie znaleziono</h2>
			<p>Niestety taki artykuł nie istniał bądź został usunięty</p>
			<div className=''>
				<p>Wróć do</p>
				<Link href='/blog'>postów</Link>
				<p>lub na</p>
				<Link href='/'>Strone główną</Link>
			</div>
		</div>
	)
}
