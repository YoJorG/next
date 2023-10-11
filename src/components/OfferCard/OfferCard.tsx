import type { Offer, OfferValue } from '@/src/types'

function OfferCard({ title, price, values }: Offer) {
	return (
		<div className='max-w-[300px] w-full h-full bg-gray-50 border-2 border-blue-600 rounded-md overflow-hidden text-center mb-4 md:mb-0'>
			<div className='bg-blue-600 w-full py-2 px-16'>
				<h2 className='mb-2 text-lg'>{title}</h2>
				<p className='text-2xl font-bold '>{price} zł</p>
			</div>
			<ul className='flex flex-col text-gray-600 gap-2 py-2 px-8  rounded-md text-sm '>
				{values.map(({ id, value, active }) => (
					<li key={id} className={active ? 'text-gray-700 font-bold text-lg' : 'text-gray-500 text-lg line-through'}>
						{value}
					</li>
				))}
			</ul>
			<button className='bg-gray-50 border-2 border-blue-600 text-blue-600 font-bold py-2 px-4 rounded-md mt-4 mb-4 hover:bg-blue-600 hover:text-white'>
				Wybierz
			</button>
		</div>
	)
}

export default OfferCard
