import { motion } from "framer-motion"
import { ReactNode } from "react"
function BigHomeLeft({ children }: HomeLeftProps) {
	return (
		<motion.div
			animate={{
				width: "100%",
			}}
			className='home-left'
		>
			{children}
		</motion.div>
	)
}

export default BigHomeLeft

interface HomeLeftProps {
	children: ReactNode
}
