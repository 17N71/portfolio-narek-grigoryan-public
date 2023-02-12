import { gql } from "@apollo/client"

export const getTabHeadings = gql`
	query getTabHeadings {
		allTabHeadings {
			_id
			tabHeading {
				headingEn
				headingHy
			}
		}
		allSkill(sort: { _updatedAt: DESC }) {
			_id
			skillTitle
			skillPercent
		}
		allTabItem(sort: { tabDateFrom: ASC }) {
			_id
			tabItemTitleHy
			tabSlug
			tabItemSubParagraphEn
			tabItemSubParagraphHy
			tabDateTo
			tabDateFrom
			tabItemSubTitleEn
			tabItemSubTitleHy
			tabItemTitleHy
			tabItemTitleEn
		}
	}
`
export const getPortfoliosForHome = gql`
	query getAllPortfoliosForHome {
		allPortfolio {
			_id
			portfolioTitle
			slug {
				current
			}
			portfolioImage {
				mainImage {
					asset {
						url
					}
				}
			}
		}
	}
`
export const getAllSlugs = gql`
	query getAllSlugs {
		allPortfolio {
			slug {
				current
			}
		}
	}
`
export const getBySlug = (slug: string) => gql`
	query getBySlug {
		allPortfolio(where: { slug: { current: { eq: "${slug}" } } }) {
			portfolioImage {
				mainImage {
					asset {
						url
					}
				}
			}
			portfolioTitle
			gitUrl
			pageUrl
			portfolioImageCollection {
				portfolioImageCollectionArray {
					collectionImageCurrent {
            asset {
							url
              _id
						}
					}
				}
			}
		}
	}
`
