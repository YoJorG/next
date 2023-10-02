import Navbar from '@/src/components/Navbar/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/src/components/Footer/Footer'
import localFont from 'next/font/local'

const ubuntu = localFont({
	src: [
		{
			path: '../public/fonts/ubuntu-light-webfont.woff2',
			weight: '300',
		},
		{
			path: '../public/fonts/ubuntu-regular-webfont.woff2',
			weight: '400',
		},
		{
			path: '../public/fonts/ubuntu-medium-webfont.woff2',
			weight: '500',
		},
		{
			path: '../public/fonts/ubuntu-bold-webfont.woff2',
			weight: '700',
		},
		{
			path: '../public/fonts/ubuntu-lightitalic-webfont.woff2',
			weight: '300',
			style: 'italic',
		},
		{
			path: '../public/fonts/ubuntu-italic-webfont.woff2',
			weight: '400',
			style: 'italic',
		},
		{
			path: '../public/fonts/ubuntu-mediumitalic-webfont.woff2',
			weight: '500',
			style: 'italic',
		},
		{
			path: '../public/fonts/ubuntu-bolditalic-webfont.woff2',
			weight: '700',
			style: 'italic',
		},
	],
	variable: '--font-ubuntu',
})

export const metadata: Metadata = {
	title: 'DriftLife - Szkoła driftu w Bydgoszczy',
	description:
		'Jesteśmy szkołą specjalizującą się już od 14 lat w nauce driftu, jeżeli chcesz nauczyć się latać bokiem lepiej trafić nie możesz.',
	icons: {
		icon: './favicon.ico',
		shortcut: './favicon.ico',
		apple: './favicon.ico',
		other: {
			rel: './favicon.ico',
			url: './favicon.ico',
		},
	},
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='pl' className='scroll-smooth'>
			<head></head>
			<body className={ubuntu.className}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	)
}
