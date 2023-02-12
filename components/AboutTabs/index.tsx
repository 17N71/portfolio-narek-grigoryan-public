import Heading from "@/components/Heading"
import TabSkillItem from "@/components/TabSkillItem"
import { LocaleContext } from "@/pages"
import { ITabProps } from "@/types/tabProps"
import { motion } from "framer-motion"
import { useContext } from "react"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs"
import Education from "./../Education"
import Experience from "./../Experience"
function AboutTabs({ tabData }: { tabData: ITabProps }) {
	const { allTabHeadings } = tabData
	const { locale } = useContext(LocaleContext)
	const experience = tabData.allTabItem.filter((t) => t.tabSlug.includes("Experience"))
	const education = tabData.allTabItem.filter((t) => t.tabSlug.includes("Education"))
	return (
		<motion.div
			className='about-tabs'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.2 }}
		>
			<Tabs>
				<TabList>
					<Tab>
						<Heading tag='h3' upper={true} className='tabHeading'>
							{locale === "en"
								? allTabHeadings[2].tabHeading.headingEn
								: allTabHeadings[2].tabHeading.headingHy}
						</Heading>
					</Tab>
					<Tab>
						<Heading tag='h3' upper={true} className='tabHeading'>
							{locale === "en"
								? allTabHeadings[0].tabHeading.headingEn
								: allTabHeadings[0].tabHeading.headingHy}
						</Heading>
					</Tab>
					<Tab>
						<Heading tag='h3' upper={true} className='tabHeading'>
							{locale === "en"
								? allTabHeadings[1].tabHeading.headingEn
								: allTabHeadings[1].tabHeading.headingHy}
						</Heading>
					</Tab>
				</TabList>
				{/* EDUCATION  */}
				<TabPanel>
					<Education education={education} />
				</TabPanel>
				{/* EDUCATION  */}
				{/* EXPERIENCE */}
				<TabPanel>
					<Experience experience={experience} />
				</TabPanel>
				{/* EXPERIENCE */}
				{/* SKILLS */}
				<TabPanel>
					{tabData.allSkill.map((s) => (
						<TabSkillItem key={s._id} {...s} />
					))}
				</TabPanel>
				{/* SKILLS */}
			</Tabs>
		</motion.div>
	)
}

export default AboutTabs
