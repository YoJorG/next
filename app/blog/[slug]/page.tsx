import fetchAPI from '@/src/utils/fetchApi'
import Article from 'components/Article/Article'
import { notFound } from 'next/navigation'
import type { PostData } from '@/src/types'
import type { Metadata } from 'next'

const queryApi = `query BlogPosts($variable: String) {
	blogPosts(
	  filters: {
		slug: {
		  contains: $variable
		}
	  }
	) {
        data {
            id
            attributes {
                title
                slug
                description
                article
                seo {
                    id
                    metaTitle
                    keywords
                    metaRobots
                    structuredData
                    metaViewport
                    canonicalURL
                    metaDescription
                    metaSocial {
                        id
                        socialNetwork
                        title
                        description
                    }}
                relatedPosts {
                    title
                    blogPosts {
                        data {
                            id
                            attributes {
                                title
                                image {
                                    data {
                                        attributes {
                                            name
                                            alternativeText
                                            formats
                                        }
                                    }
                                }
                                description
                                slug
                            }
                        }
                    }
                }
                publishedAt
                image {
                    data {
                        attributes {
                            alternativeText
                            formats
                        }
                    }
                }
            }
        }
    }
}

`

const querySlug = `query BlogPosts {
    blogPosts {
        data {
            attributes {
                slug
            }
        }
    }
}`

type Props = {
	params: { slug: string }
	searchParams: { [key: string]: string | string[] | undefined }
}

type ISlug = {
	attributes: {
		slug: string
	}
}

export async function generateStaticParams() {
	const posts = await fetchAPI(querySlug)

	const slugs: ISlug[] = posts.data.blogPosts.data

	return slugs.map((post) => ({
		slug: post.attributes.slug,
	}))
}

export default async function Page({ params }: { params: { slug: string } }) {
	const articleData = await getPostData(params.slug)

	if (!articleData) return notFound()

	return <Article {...articleData} />
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
	const data = (await getPostData(params.slug)) as { postData: PostData; image: string }
	if (!data) return notFound()

	const { postData, image } = data

	const url = process.env.STRAPI_URL
	const seo = postData.seo
	return {
		title: seo.metaTitle,
		description: seo.metaDescription,
		keywords: seo.keywords,
		openGraph: {
			title: seo.metaTitle,
			description: seo.metaDescription,
			siteName: 'DriftLife',
			images: [
				{
					url: url + image,
					width: 800,
					height: 600,
					alt: 'jakiś tam alcik',
				},
			],
			locale: 'pl_PL',
			type: 'article',
		},
	}
}

const getPostData = async (slug: string) => {
	try {
		const { data } = await fetchAPI(queryApi, slug)
		if (!data.blogPosts.data[0]) {
			return undefined
		}
		const postData: PostData = data.blogPosts.data[0].attributes
		const image = postData.image.data.attributes.formats.medium.url

		return { postData, image }
	} catch (error) {
		console.error(error)
	}
}
