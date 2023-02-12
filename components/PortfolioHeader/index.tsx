import Heading from "@/components/Heading"
import { LocaleContext } from "@/pages"
import { useContext } from "react"

function PortfolioHeader() {
	const { locale } = useContext(LocaleContext)

	return (
		<div className='portfolio-header'>
			<Heading tag='h2' className='portfolio-header-title' upper={true}>
				{locale === "en" ? "Portfolio" : "Պորտֆոլիո"}
			</Heading>
			<Heading tag='h3' className='portfolio-header-subtitle'>
				{locale === "en" ? "Works are done" : "Կատարած աշխատանքներ"}
			</Heading>
		</div>
	)
}

export default PortfolioHeader
