import { ITabProps } from "@/types/tabProps"
import AboutArticle from "../AboutArticle"
import AboutTable from "../AboutTable"
import AboutTabs from "../AboutTabs"

function About({ tabData }: IAboutProps) {
	return (
		<section className='link-section about home-paddings'>
			<AboutArticle />
			<AboutTable />
			<AboutTabs tabData={tabData} />
		</section>
	)
}

export default About
interface IAboutProps {
	tabData: ITabProps
}
