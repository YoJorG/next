function Footer() {
	const year = new Date().getFullYear()
	return (
		<footer className='container mx-auto text-center py-4 bg-gray-50'>
			BusinessCopy {year} &copy; | Website by <a href=''>HeadCode.pl</a>{' '}
		</footer>
	)
}

export default Footer
