import { IPortfolioPageProps } from "./IPortfoliosProps"
import { ITabProps } from "./tabProps"

export interface IHomePageProps {
	locale: "hy" | "en" | string
	tabData: ITabProps
	loadPortfolios: boolean
	portfolioData: IPortfolioPageProps
}
