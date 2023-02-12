import ReactCountryFlag from "react-country-flag"

function LangButton({
	area = "portfolio",
	locale,
	className = "",
	asPath,
}: {
	asPath: string
	className?: string
	locale: "en" | "hy" | string
	area: "home" | "portfolio"
}) {
	switch (area) {
		case "home":
			return (
				<a
					className={`langBtn langBtn-home ${className}`}
					href={`${process.env.NEXT_PUBLIC_PAGE_URL}${locale === "en" ? "hy" : "en"}${
						asPath || ""
					}`}
				>
					{locale === "hy" ? (
						<ReactCountryFlag
							countryCode='US'
							svg
							style={{
								width: "1.8em",
								height: "1.8em",
							}}
							title='US'
						/>
					) : (
						<ReactCountryFlag
							countryCode='AM'
							svg
							style={{
								width: "1.8em",
								height: "1.8em",
							}}
							aria-label='Armenia'
						/>
					)}
				</a>
			)
		case "portfolio":
			return (
				<a
					className={`langBtn langBtn-portfolio ${className}`}
					href={`${process.env.NEXT_PUBLIC_PAGE_URL}${locale === "en" ? "hy" : "en"}${
						asPath || ""
					}`}
				>
					{locale === "hy" ? (
						<ReactCountryFlag
							countryCode='US'
							svg
							style={{
								width: "1.8em",
								height: "1.8em",
							}}
							title='US'
						/>
					) : (
						<ReactCountryFlag
							countryCode='AM'
							svg
							style={{
								fontSize: "1.8em",
								lineHeight: "1.8em",
							}}
							aria-label='Armenia'
						/>
					)}
				</a>
			)
		default:
			return (
				<a
					className={`langBtn langBtn-portfolio ${className}`}
					href={`${process.env.NEXT_PUBLIC_PAGE_URL}${locale === "en" ? "hy" : "en"}${
						asPath || ""
					}`}
				>
					{locale === "hy" ? (
						<ReactCountryFlag
							countryCode='US'
							svg
							style={{
								width: "1.8em",
								height: "1.8em",
							}}
							title='US'
						/>
					) : (
						<ReactCountryFlag
							countryCode='AM'
							svg
							style={{
								width: "1.8em",
								height: "1.8em",
							}}
							aria-label='Armenia'
						/>
					)}
				</a>
			)
	}
}

export default LangButton
