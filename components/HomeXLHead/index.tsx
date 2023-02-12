import { motion } from "framer-motion"
import Image from "next/image"
import ReactTyped from "react-typed"
import ButtonOpenMenu from "../ButtonOpenMenu"
function HomeXLHead({ locale, scrolled, openMenuHandle }: HomeXLHeadType) {
	return (
		<motion.div animate={{ width: scrolled ? "30%" : "40%" }} className={`home-right`}>
			<ButtonOpenMenu locale={locale} openMenuHandle={openMenuHandle} />
			<div className='home-right-image-container'>
				<Image
					className='home-right-image'
					src='/me.jpg'
					alt="My photo 'Narek Grigoryan'"
					title="My photo 'Narek Grigoryan'"
					width={500}
					height={500}
					priority
				/>
				<span className='home-right-greeting'>
					{locale === "en" ? "hi there i am" : "Ողջույն ես`"}
				</span>
				<br />
				<ReactTyped
					className='home-right-typed'
					strings={
						locale === "en"
							? ["Narek Grigoryan", "Front-end developer"]
							: ["Նարեկ Գրիգորյանն եմ", "Front-end ծրագրավորող եմ"]
					}
					loop={true}
					typeSpeed={80}
					backSpeed={20}
				/>
			</div>
		</motion.div>
	)
}
export default HomeXLHead
type HomeXLHeadType = {
	scrolled: boolean
	locale: string
	openMenuHandle: () => void
}
