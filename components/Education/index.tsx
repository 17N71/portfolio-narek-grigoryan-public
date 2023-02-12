import { allTabItem } from "@/types/allTabItem"
import { AnimatePresence } from "framer-motion"
import SimpleTabItem from "../SimpleTabItem"

function Education({ education }: IEducationProps) {
	return (
		<AnimatePresence>
			{education.map((e) => (
				<SimpleTabItem key={e._id} {...e} />
			))}
		</AnimatePresence>
	)
}

export default Education

interface IEducationProps {
	education: allTabItem[]
}
