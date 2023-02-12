import Heading from "@/components/Heading"
import { AllSkill } from "@/types/allSkills"
import { motion } from "framer-motion"

function TabSkillItem({ skillTitle, skillPercent }: AllSkill) {
	return (
		<div className='tabItem '>
			<div className='skillTabHeader'>
				<Heading tag='h5' className='skillTabHeading'>
					{skillTitle}
				</Heading>
				<span className='skillTable'>{skillPercent}%</span>
			</div>
			<div className='skillBarContainer'>
				<motion.div
					initial={{ width: 0 }}
					animate={{
						width: `${skillPercent}%`,
					}}
					transition={{
						duration: 0.7,
						ease: "easeIn",
					}}
					className='skillBar'
				/>
			</div>
		</div>
	)
}

export default TabSkillItem
