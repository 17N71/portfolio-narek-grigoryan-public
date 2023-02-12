export interface IPortfoliosProps {
	allPortfolio: IPortfoliosProp[]
}
export interface IPortfolioContent {
	title: string
	subtitle: string
}
export interface IPortfolioContentProps {
	portfolioContent: IPortfolioContent
}
export interface IPortfolioSliderProps {
	portfolios: IPortfoliosProp[]
}
export interface IPortfolioPageProps {
	portfolios: IPortfoliosProp[]
}
export interface IPortfolioPage {
	portfolioData: IPortfolioPageProps
}
export interface IPortfoliosProp {
	_id: string
	portfolioTitle: string
	slug: {
		current: string
	}
	portfolioImage: {
		mainImage: {
			asset: {
				url: string
			}
		}
	}
}
