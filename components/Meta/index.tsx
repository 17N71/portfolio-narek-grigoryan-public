interface MetaProps {
	locale: "hy" | "en" | string
}
function Meta({ locale }: MetaProps) {
	return (
		<>
			<meta name='theme-color' content='dark light' />
			<meta
				name='title'
				content={`${locale === "en" ? "Narek Grigoryan portfolio" : "Նարեկ Գրիգորյան պորտֆոլիո"}`}
			/>
			<meta
				name='og:title'
				content={`${locale === "en" ? "Narek Grigoryan portfolio" : "Նարեկ Գրիգորյան պորտֆոլիո"}`}
			/>
			<meta name='revisit-after' content='15 days' />
			<meta name='og:locale' content={"en_US"} />
			<meta
				name='description'
				content={`${
					locale === "en"
						? "I'm Front-end Developer. I'm from Yerevan. I code and create web pages. It's my first official portfolio."
						: "Ես Front-end Ծրագրավորող եմ: Ես Երևանից եմ։ Ծրագրավորում եմ և ստեղծում վեբ էջեր։ Սա իմ առաջին պաշտոնական պորտֆոլիոն է:"
				}`}
			/>
			<meta
				name='og:description'
				content={`${
					locale === "en"
						? "I'm Front-end Developer. I'm from Yerevan. I code and create web pages. It's my first official portfolio."
						: "Ես Front-end Ծրագրավորող եմ: Ես Երևանից եմ։ Ծրագրավորում եմ և ստեղծում վեբ էջեր։ Սա իմ առաջին պաշտոնական պորտֆոլիոն է:"
				}`}
			/>
			<meta name='og:locale:alternate' content={locale === "en" ? "hy_AM" : "en"} />
			<meta name='language' content={locale} />
			<meta name='robots' content='index, follow' />
			<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
			<meta property='fb:app_id' content='%d' />
			<meta name='author' content={`${locale === "en" ? "Narek Grigoryan" : "Նարեկ Գրիգորյան"}`} />
			<meta
				name='og:author'
				content={`${locale === "en" ? "Narek Grigoryan" : "Նարեկ Գրիգորյան"}`}
			/>
			<meta property='og:type' content='portfolio' />
			<meta name='og:image:type' content='image/jpeg' />
			<meta name='og:image:width' content='300' />
			<meta name='og:image:height' content='260' />
			<meta
				name='og:image'
				content='https://portfolio-narek-grigoryan.vercel.app/_next/image?url=%2Fme.jpg&w=640&q=100'
			/>
			<meta
				name='og:image:url'
				content='https://portfolio-narek-grigoryan.vercel.app/_next/image?url=%2Fme.jpg&w=640&q=100'
			/>
			<meta
				name='keywords'
				content='front-end,developer,portfolio,Next.js,React,react.js,react,developing,tailwind,Tailwind'
			/>
			<meta
				name='description'
				content={
					"Hi my name is Narek i'm front-end developer and it's my portfolio created on Next.js and Tailwind"
				}
			/>
			<meta
				name='og:description'
				content={
					"Hi my name is Narek i'm front-end developer and it's my portfolio created on Next.js and Tailwind"
				}
			/>
			<meta property='og:url' content='https://portfolio-narek-grigoryan.vercel.app/' />
		</>
	)
}

export default Meta
