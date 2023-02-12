import { Link } from "react-scroll"
import { CgClose } from "react-icons/cg"
import LangButton from "@/components/LangButton"
import { useRouter } from "next/router"
function ListMenu({ locale, menu, closeMenuHandle }: IListMenuProps) {
	const r = useRouter()

	return (
		<>
			<nav className={`list-menu ${menu ? "active" : ""}`} onClick={(e) => e.stopPropagation()}>
				<ul className='list-menu-ul' onClick={(e) => e.stopPropagation()}>
					<li className='list-menu-li' onClick={closeMenuHandle}>
						<Link
							spy={true}
							smooth={true}
							to={"home-17n71"}
							duration={365}
							onClick={closeMenuHandle}
						>
							{locale === "en" ? "Home" : "Գլխավոր"}
						</Link>
					</li>
					<li className='list-menu-li' onClick={closeMenuHandle}>
						<Link
							spy={true}
							smooth={true}
							to={"about-17n71"}
							duration={365}
							onClick={closeMenuHandle}
						>
							{locale === "en" ? "About" : "Իմ մասին"}
						</Link>
					</li>
					<li className='list-menu-li' onClick={closeMenuHandle}>
						<Link
							spy={true}
							smooth={true}
							to={"portfolio-17n71"}
							duration={365}
							offset={70}
							onClick={closeMenuHandle}
						>
							{locale === "en" ? "Portfolio" : "Պորտֆոլիո"}
						</Link>
					</li>
					<li className='list-menu-li' onClick={closeMenuHandle}>
						<Link
							spy={true}
							smooth={true}
							to={"contact-17n71"}
							duration={365}
							offset={70}
							onClick={closeMenuHandle}
						>
							{locale === "en" ? "Contact" : "Կապ"}
						</Link>
					</li>
				</ul>
				<button type='button' className='list-menu-close-btn' onClick={closeMenuHandle}>
					<CgClose size={32} title={locale === "en" ? "Close menu" : "Փակել մենյուն"} />
				</button>
				<LangButton className="list-menu-language" area='home' locale={locale} asPath={r.asPath} />
			</nav>
		</>
	)
}

export default ListMenu

interface IListMenuProps {
	locale: "en" | "en" | string
	menu: boolean
	closeMenuHandle: () => void
}
