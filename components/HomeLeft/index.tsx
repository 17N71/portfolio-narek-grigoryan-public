import { motion } from "framer-motion"
import { ReactNode } from "react"
function HomeLeft({ children, isSize, memoedIsSize }: HomeLeftProps) {
	return (
		<motion.div
			animate={{
				width: memoedIsSize ? "70%" : "60%",
			}}
			className='home-left'
		>
			{children}
		</motion.div>
	)
}

export default HomeLeft

interface HomeLeftProps {
	children: ReactNode
	memoedIsSize: boolean
	isSize: boolean
}
