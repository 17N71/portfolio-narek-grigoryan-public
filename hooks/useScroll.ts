import { useEffect, useState } from "react"

export default function useScroll(scrollCount: number) {
	const [scroll, setScroll] = useState<number>(0)
	const [isScrolled, setIsScrolled] = useState<boolean>(false)
	useEffect(() => {
		function SCRL() {
			setScroll(window.scrollY)
			if (scroll >= scrollCount) {
				setIsScrolled(true)
			} else {
				setIsScrolled(false)
			}
		}
		window.addEventListener("scroll", SCRL)
		return () => window.removeEventListener("scroll", SCRL)
	}, [scroll, isScrolled])
	return [isScrolled] as const
}
