import { IPortfolioPage } from "@/types/IPortfoliosProps"
import PortfolioHeader from "../PortfolioHeader"
import PortfolioSlider from "../PortfolioSlider"

function Portfolio({ portfolioData }: IPortfolioPage) {
	const { portfolios } = portfolioData
	return (
		<section className='portfolio home-paddings' id='portfolio-17n71'>
			<PortfolioHeader />
			<PortfolioSlider portfolios={portfolios} />
		</section>
	)
}

export default Portfolio
