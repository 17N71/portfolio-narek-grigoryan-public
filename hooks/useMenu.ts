import { useEffect, useState } from "react"
import type { MouseEvent } from "react"
function useMenu() {
	const [menu, setMenu] = useState<boolean>(false)
	const changeMenu = () => setMenu(!menu)
	const closeMenu = () => setMenu(false)
	const openMenu = (e: MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation()
		setMenu(true)
	}
	const closeMenuByKey = (e: KeyboardEventInit) => {
		if (menu) {
			if (e.key === "Escape") {
				setMenu(false)
				console.log(1)
			}
		}
	}
	useEffect(() => {
		window.addEventListener("keydown", closeMenuByKey)
		if (menu) {
			window.addEventListener("click", closeMenu)
			document.body.style.overflow = "hidden"
			document.body.style.paddingRight = "12px"
		} else {
			document.body.style.overflow = "auto"
			document.body.style.paddingRight = "0"
			window.removeEventListener("click", closeMenu)
		}

		return () => {
			window.removeEventListener("click", closeMenu)
			window.removeEventListener("keydown", closeMenuByKey)
		}
	}, [menu, closeMenu, openMenu, changeMenu])
	return [menu, changeMenu, openMenu, closeMenu] as const
}

export default useMenu
