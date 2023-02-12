import { GiHamburgerMenu } from "react-icons/gi"
interface ButtonOpenMenuProps {
	openMenuHandle: () => void
	locale: "hy" | "en" | string
}
function ButtonOpenMenu({ openMenuHandle, locale }: ButtonOpenMenuProps) {
	return (
		<>
			<button type='button' onClick={openMenuHandle} className='list-menu-open-btn'>
				<GiHamburgerMenu size={28} title={locale ? "Open menu" : "Բացել մենյուն"} />
			</button>
		</>
	)
}

export default ButtonOpenMenu
