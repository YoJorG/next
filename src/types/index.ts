type Seo = {
	id: string
	metaTitle: string
	keywords: string
	metaRobots: string
	structuredData: string | null
	metaViewport: string | null
	canonicalURL: string | null
	metaDescription: string
}

type PostData = {
	title: string
	slug: string
	description: string
	article: string
	seo: Seo
	relatedPosts: object
	publishedAt: string
	image: ImageData
}

type ImageFormat = {
	name: string
	hash: string
	ext: string
	mime: string
	path: null | string
	width: number
	height: number
	size: number
	url: string
}

type ImageData = {
	data: {
		attributes: {
			name: string
			formats: {
				thumbnail: ImageFormat
				small: ImageFormat
				medium: ImageFormat
				large: ImageFormat
			}
		}
	}
}

type BlogAttributes = {
	title: string
	slug: string
	image: ImageData
	description: string
}

type BlogPost = {
	id: string
	attributes: BlogAttributes
}

type BlogData = {
	data: BlogPost[]
}

type Blog = {
	blogPosts: BlogData
	title: string
}

type OfferValue = {
	id: string
	value: string
	active: boolean
}

type Offer = {
	id: string
	title: string
	price: number
	values: OfferValue[]
}

type Offers = {
	id: string
	normal: Offer
	special: Offer
	premium: Offer
}

export type {
	Seo,
	PostData,
	BlogPost,
	Blog,
	BlogData,
	BlogAttributes,
	ImageData,
	ImageFormat,
	Offers,
	OfferValue,
	Offer,
}
