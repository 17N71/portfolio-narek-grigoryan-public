import { LocaleContext } from "@/pages"
import { allTabItem } from "@/types/allTabItem"
import { motion } from "framer-motion"
import { useContext } from "react"
import DateHeading from "../DateHeading"
import Heading from "../Heading"
function SimpleTabItem({
	tabItemTitleEn,
	tabItemTitleHy,
	tabDateTo,
	tabDateFrom,
	tabItemSubTitleEn,
	tabItemSubTitleHy,
	tabItemSubParagraphHy,
	tabItemSubParagraphEn,
}: allTabItem) {
	const { locale } = useContext(LocaleContext)
	return (
		<motion.div
			className='tabItem '
			initial={{ opacity: 0, x: -10 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: 5 }}
			transition={{ duration: 0.3 }}
		>
			<div className='tabItemHeader'>
				<Heading className='tabItemTitle' tag='h4'>
					{locale === "en" ? tabItemTitleEn : tabItemTitleHy}
				</Heading>
				<DateHeading tabDateFrom={tabDateFrom} tabDateTo={tabDateTo} />
			</div>
			<Heading tag='h4' className='tabItemSubTitle'>
				{locale === "en" ? tabItemSubTitleEn : tabItemSubTitleHy}
			</Heading>
			<p className='tabItemParagraph'>
				{locale === "en" ? tabItemSubParagraphEn : tabItemSubParagraphHy}
			</p>
		</motion.div>
	)
}

export default SimpleTabItem
interface ISimpleTabProps {
	duration: number
}
