import { allTabItem } from "@/types/allTabItem"
import { AnimatePresence } from "framer-motion"
import SimpleTabItem from "../SimpleTabItem"

function Experience({ experience }: IExperienceProps) {
	return (
		<AnimatePresence>
			{experience.map((e) => (
				<SimpleTabItem key={e._id} {...e} />
			))}
		</AnimatePresence>
	)
}

export default Experience

interface IExperienceProps {
	experience: allTabItem[]
}
