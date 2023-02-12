import { MouseEventHandler } from "react"
import { AiOutlineArrowUp } from "react-icons/ai"
export const toTop: MouseEventHandler<HTMLButtonElement> = (): void => {
	window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
}
function Footer({ locale }: { locale: string }) {
	return (
		<footer className='home-footer home-paddings'>
			<p className='home-footer-template'>
				{locale === "en"
					? "Page developed by Narek Grigoryan design from internet and modified"
					: "Էջը պատրաստել է Նարեկ Գրիգորյանի դիզայնը ինտերնետից է և փոփոխված է"}
			</p>
			<p className='home-footer-rights'>
				{locale === "en" ? "All rights reversed " : "Բոլոր իրավունքները պաշտպանված են "} &copy;{" "}
				{new Date().getFullYear()}
			</p>
			<button type='button' onClick={toTop} className='home-footer-to-top'>
				<AiOutlineArrowUp size={28} title={"To Top"} />
			</button>
		</footer>
	)
}

export default Footer
