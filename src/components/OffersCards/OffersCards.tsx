import type { Offers } from '@/src/types'
import OfferCard from '@/src/components/OfferCard/OfferCard'

function OfferCards({ normal, special, premium }: Offers) {
	return (
		<section className='bg-gray-50 text-white' id='oferta'>
			<div className='container mx-auto py-16 flex items-center flex-col w-full'>
				<h2 className='text-blue-600 font-bold text-2xl mb-8 before:w-full before:h-1 before:left-0 before:-bottom-0 before:border-b-2 before:border-blue-400 before:absolute relative before:bg-blue-600 '>
					Oferta
				</h2>
				<div className='flex flex-wrap items-center justify-evenly gap-y-10 w-full px-2'>
					<OfferCard {...normal} />
					<OfferCard {...special} />
					<OfferCard {...premium} />
				</div>
			</div>
		</section>
	)
}

export default OfferCards
