import { client } from "@/apollo.client"
import Footer from "@/components/Footer"
import Heading from "@/components/Heading"
import LangButton from "@/components/LangButton"
import { getAllSlugs, getBySlug } from "@/queries/queries"
import { allSlugs } from "@/types/allSlugs"
import { ICurrentPageProps, ICurrentPagePropsQuery } from "@/types/ICurrentPageProps"
import { GetStaticPaths, GetStaticPathsContext, GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { ImageViewer } from "react-image-viewer-dv"
import PortfolioMeta from "./../../../components/PortfolioMeta/index"
export const getStaticPaths: GetStaticPaths = async (ctx: GetStaticPathsContext) => {
	const { data } = await client.query<allSlugs>({
		query: getAllSlugs,
	})
	const paths = data.allPortfolio.map(({ slug }) => {
		return {
			params: {
				slug: slug.current,
			},
		}
	})

	return {
		paths,
		fallback: "blocking",
	}
}
export const getStaticProps: GetStaticProps = async (params: any) => {
	const { slug } = params.params
	const { data, loading, error } = await client.query<ICurrentPagePropsQuery>({
		query: getBySlug(slug),
	})
	try {
		if (error) {
			return {
				notFound: true,
			}
		}
		return {
			props: { data: data.allPortfolio[0], loading, locale: params.locale, slug },
		}
	} catch {
		return {
			notFound: true,
		}
	}
}
function CurrentPortfolioPage({ data, locale, slug }: ICurrentPageProps) {
	const router = useRouter()
	const { portfolioImageCollection } = data
	return (
		<div className='CurrentPortfolioPage'>
			<Head>
				<title>
					{locale === "en" ? "Narek Grigoryan portfolio" : "Նարեկ Գրիգորյան պորտֆոլիո"} -{" "}
					{data.portfolioTitle}
				</title>
				<PortfolioMeta
					title={data.portfolioTitle}
					slug={slug}
					locale={locale}
					image={data.portfolioImage.mainImage.asset.url}
				/>
			</Head>
			<header className='CurrentPortfolioPage-header'>
				<Link href={"/"} className='CurrentPortfolioPage-goBack'>
					<AiOutlineArrowLeft
						title={locale === "en" ? "Go to home" : "Գնալ գլխավոր էջ"}
						size={28}
					/>
				</Link>
				<Heading tag='h1' className='CurrentPortfolioPage-title'>
					{data.portfolioTitle}
				</Heading>
				<LangButton area='portfolio' locale={locale} asPath={router.asPath} />
			</header>
			<main className='CurrentPortfolioPage-wrapper'>
				<div className='CurrentPortfolioPage-urls'>
					<a href={data.gitUrl} target='_blank' rel='noopener noreferrer'>
						{locale === "en" ? "You can watch the my code" : "Դուք կարող եք տեսնել իմ կոդը"}
					</a>
					<a href={data.pageUrl} target='_blank' rel='noopener noreferrer'>
						{locale === "en" ? "You can watch the page" : "Դուք կարող եք տեսնել կայքը"}
					</a>
				</div>
				<section className='CurrentPortfolioPage-main'>
					{portfolioImageCollection.portfolioImageCollectionArray.map((pi) => (
						<div
							key={pi.collectionImageCurrent.asset._id}
							className='CurrentPortfolioPage-imageContainer'
						>
							<ImageViewer>
								<Image
									priority
									width={900}
									height={400}
									className='CurrentPortfolioPage-image'
									title={`${data.portfolioTitle}`}
									src={pi.collectionImageCurrent.asset.url}
									alt={`${data.portfolioTitle} `}
								/>
							</ImageViewer>
						</div>
					))}
				</section>
			</main>
			<Footer locale={locale} />
		</div>
	)
}

export default CurrentPortfolioPage
