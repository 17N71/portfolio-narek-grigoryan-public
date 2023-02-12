import Heading from "@/components/Heading"
import { LocaleContext } from "@/pages"
import { useContext } from "react"

function AboutArticle() {
	const { locale } = useContext(LocaleContext)
	return (
		<div className='about-article' id='about-17n71'>
			<Heading tag='h2' upper={true} className='ash1 about-article-title'>
				{locale == "en" ? "About me" : "Իմ մասին"}
			</Heading>
			<Heading tag='h2' className='about-article-subtitle'>
				{locale == "en" ? "Biography" : "Կենսագրություն"}
			</Heading>
			<p className='about-article-paragraph'>
				{locale == "en"
					? "I'm Front-end Developer. I'm from Yerevan. I code and create web pages. It's my first official portfolio. I studied programming at"
					: "Ես Front-end Ծրագրավորող եմ: Ես Երևանից եմ։ Ծրագրավորում եմ և ստեղծում վեբ էջեր։ Սա իմ առաջին պաշտոնական պորտֆոլիոն է: Ծրագրավորում սովորել եմ Մտքի Զարկ"}
				{` `}
				<a
					href='https://sot-mz.com/'
					className='about-article-link sot-link'
					target='_blank'
					rel='noopener noreferrer'
				>
					STIMULUS OF THOUGHT
				</a>
				{` `}
				{locale == "en"
					? "NGO. I like working with new people. New people are new experiences. To create this page I used"
					: "ասարակական կազմակերպությունում: Ինձ դուր է գալիս աշխատել նոր մարդկանց հետ: Նոր մարդիկ նոր ծանոթություններ : Այս էջը ստեղծելու համար ես օգտագործել եմ "}
				{` `}
				<a
					href='https://tailwindcss.com/'
					className='about-article-link tailwindcss-link'
					target='_blank'
					rel='noopener noreferrer'
				>
					TailwindCSS
				</a>
				{` `}
				<a
					href='https://nextjs.org/'
					className='about-article-link next-link'
					target='_blank'
					rel='noopener noreferrer'
				>
					Next.js,
				</a>

				<a
					href='https://sass-lang.com/'
					className='about-article-link sass-link'
					target='_blank'
					rel='noopener noreferrer'
				>
					Sass
				</a>

				<a
					href='https://www.typescriptlang.org/'
					className='about-article-link typescript-link'
					target='_blank'
					rel='noopener noreferrer'
				>
					TypeScript
				</a>
				{` `}
				{locale == "en"
					? "and etc. I'm glad to see you on my page, and I'm sure you'll like it, below you will see my works."
					: " և այլն: Ուրախ եմ ձեզ տեսնել իմ էջում, և վստահ եմ, որ այն ձեզ դուր կգա ստորև դուք կտեսնեք իմ աշխատանքներից։ "}
			</p>
		</div>
	)
}

export default AboutArticle
