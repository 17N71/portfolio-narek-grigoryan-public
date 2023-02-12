import { motion } from "framer-motion"
import Image from "next/image"
import ReactTyped from "react-typed"
function HomeHead({ locale }: { locale: "hy" | "en" }) {
	return (
		<section>
			<motion.div className={`home-top`}>
				<div className='home-right-image-container'>
					<Image
						className='home-right-image'
						src='/me.jpg'
						alt="My photo 'Narek Grigoryan'"
						title="My photo 'Narek Grigoryan'"
						width={500}
						height={500}
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
		</section>
	)
}

export default HomeHead
