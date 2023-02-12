import Heading from "@/components/Heading"
import Image from "next/image"
function Introduction({ locale }: { locale: string }) {
	return (
		<section className='home-introduction home-paddings ' id='home-17n71'>
			<Heading className='home-introduction-title' tag='h1' upper={true}>
				{locale === "en" ? "Introduction" : "Ներածություն"}
			</Heading>
			<Heading className='home-introduction-subtitle' tag='h2' upper={false}>
				{locale === "en" ? "Front-end developer" : "Front-end ծրագրավորող"}
			</Heading>
			<p className='home-introduction-short-bio'>
				{locale === "en"
					? "I develop web pages of various sizes and styles, nice to see you on my site"
					: "Ես մշակում եմ տարբեր չափերի և ոճերի վեբ էջեր, ուրախ եմ ձեզ տեսնել իմ կայքում"}
			</p>
			<Image
				width={500}
				height={500}
				src='/introduction.svg'
				className='home-introduction-image'
				alt='Narek Grigoryan introduction'
				title='Narek Grigoryan introduction'
			/>
		</section>
	)
}

export default Introduction
