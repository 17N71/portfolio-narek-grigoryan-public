import { client } from "@/apollo.client"
import About from "@/components/About"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import HomeHead from "@/components/HomeHead"
import HomeWrapper from "@/components/HomeWrapper"
import HomeXLHead from "@/components/HomeXLHead"
import Introduction from "@/components/Introduction"
import Portfolio from "@/components/Portfolio"
import { useResize, useScroll, useMenu } from "@/hooks"
import { getPortfoliosForHome, getTabHeadings } from "@/queries/queries"
import { IHomePageProps } from "@/types/homeTypes"
import { IPortfoliosProps } from "@/types/IPortfoliosProps"
import { ITabProps } from "@/types/tabProps"
import { motion } from "framer-motion"
import { GetStaticProps } from "next"
import Head from "next/head"
import ListMenu from "@/components/ListMenu"
import ButtonOpenMenu from "@/components/ButtonOpenMenu"
import { createContext, useMemo } from "react"
import { MatchMediaHOC } from "react-match-media"
import Meta from "@/components/Meta"
const MediaHomeHead = MatchMediaHOC(HomeHead, "(max-width: 1040px)")
const MediaHomeXLHead = MatchMediaHOC(HomeXLHead, "(min-width: 1040px)")
const MediaButtonOpenMenu = MatchMediaHOC(ButtonOpenMenu, "(max-width: 1040px)")
export const LocaleContext = createContext<any>({})
function Home({ portfolioData, locale, tabData }: IHomePageProps) {
	const [scrolled] = useScroll(90)
	const [isSize] = useResize(1040, [scrolled], "small")
	const [menu, , openMenuHandle, closeMenuHandle] = useMenu()
	const memoedIsSize = useMemo(() => {
		return !isSize && scrolled
	}, [isSize, scrolled])
	return (
		<>
			{menu && (
				<motion.div
					initial={{
						x: -100,
						opacity: 0,
						width: "0%",
					}}
					animate={{
						x: 0,
						opacity: 1,
						width: "100%",
					}}
					transition={{ duration: 0.4, transitionTimingFunction: "cubic-bezier(.44,1.22,0,-0.01)" }}
					className={`list-menu-background`}
					onClick={closeMenuHandle}
				/>
			)}

			<ListMenu locale={locale} menu={menu} closeMenuHandle={closeMenuHandle} />
			<motion.main layoutId={`home-main-${Math.random()}`} className='home-main'>
				<LocaleContext.Provider value={{ locale }}>
					<Head>
						<title>{locale === "en" ? "Narek Grigoryan" : "նարեկ Գրիգորյան"}</title>
						<Meta locale={locale} />
					</Head>
					<MediaButtonOpenMenu locale={locale} openMenuHandle={openMenuHandle} />
					<HomeWrapper isSize={isSize} memoedIsSize={memoedIsSize}>
						<MediaHomeHead locale={locale} />
						<Introduction locale={locale} />
						<About tabData={tabData} />
						<Portfolio portfolioData={portfolioData} />
						<Contact locale={locale} />
						<Footer locale={locale} />
					</HomeWrapper>
					<MediaHomeXLHead openMenuHandle={openMenuHandle} locale={locale} scrolled={scrolled} />
				</LocaleContext.Provider>
			</motion.main>
		</>
	)
}
export default Home
export const getStaticProps: GetStaticProps = async ({ locale }) => {
	try {
		const {
			data: tabData,
			loading,
			error,
		} = await client.query<ITabProps>({
			query: getTabHeadings,
		})

		const {
			data: portfolios,
			loading: loadPortfolios,
			error: portfolioError,
		} = await client.query<IPortfoliosProps>({
			query: getPortfoliosForHome,
		})
		if (error || portfolioError) {
			return {
				notFound: true,
			}
		}
		return {
			props: {
				tabData,
				loading,
				locale,
				loadPortfolios,
				portfolioData: {
					portfolios: portfolios.allPortfolio,
				},
			},
		}
	} catch {
		return {
			notFound: true,
		}
	}
}
