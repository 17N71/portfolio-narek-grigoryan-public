export interface ICurrentPagePropsQuery {
	allPortfolio: ICurrentPagePortfolio[]
}
interface ICurrentPagePortfolio {
	portfolioImage: {
		mainImage: {
			asset: {
				url: string
			}
		}
	}
	portfolioImageCollection: {
		portfolioImageCollectionArray: collectionImageCurrent[]
	}
	portfolioTitle: string
	gitUrl: string
	pageUrl: string
}
interface collectionImageCurrent {
	collectionImageCurrent: {
		asset: {
			url: string
			_id: string
		}
	}
}

export interface ICurrentPageProps {
	data: ICurrentPagePortfolio
	loading: boolean
	locale: "en" | "hy"
  slug:string
}
