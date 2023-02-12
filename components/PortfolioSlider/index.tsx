import { IPortfolioSliderProps } from "@/types/IPortfoliosProps"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css/core"
import Image from "next/image"
import Link from "next/link"

function PortfolioSlider({ portfolios }: IPortfolioSliderProps) {
	return (
		<div className='portfolio-slider'>
			<Splide
				className='portfolio-splide'
				options={{
					type: "loop",
					label: "My portfolio gallery",
					paginationKeyboard: true,
					keyboard: "global",
					drag: "free",
					start: 0,
					snap: true,
					padding: 0,
					gap: "2rem",
					trimSpace: true,
					slideFocus: true,
					focus: "center",
					autoplay: true,
					interval: 2200,
					pauseOnFocus: true,
					pauseOnHover: true,
				}}
			>
				{portfolios.map((p) => (
					<SplideSlide key={p._id}>
						<Link href={`/portfolio/${p.slug.current}`} className={"portfolio-slider-link"}>
							<Image
								src={p.portfolioImage.mainImage.asset.url}
								alt={p.portfolioTitle}
								title={p.portfolioTitle}
								priority
								height={650}
								width={1040}
								className='portfolio-splideSlide'
							/>
						</Link>
					</SplideSlide>
				))}
			</Splide>
		</div>
	)
}

export default PortfolioSlider
