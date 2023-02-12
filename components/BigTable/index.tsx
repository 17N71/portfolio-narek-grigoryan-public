import DownloadButton from "@/components/DownloadButton"
import { getMyAge } from "@/components/SmallTable"
import { LocaleContext } from "@/pages"
import { useContext } from "react"

function BigTable() {
	const { locale } = useContext(LocaleContext)
	return (
		<div className='about-table-big'>
			<ul className='about-table-big-table-keys'>
				<li className='about-table-big-item'>{locale === "en" ? "Name" : "Անուն"}</li>
				<li className='about-table-big-item'>{locale === "en" ? "Age" : "Տարիք"}</li>
				<li className='about-table-big-item'>{locale === "en" ? "Address" : "Հասցե"}</li>
				<li className='about-table-big-item'>{locale === "en" ? "Phone" : "Հեռախոսահամար"}</li>
				<li className='about-table-big-item'>{locale === "en" ? "Mail" : "էլ.փոստ"}</li>
			</ul>
			<ul className='about-table-big-table-values'>
				<li className='about-table-big-item'>
					{locale === "en" ? "Narek Grigoryan" : "Նարեկ Գրիգորյան"}
				</li>
				<li className='about-table-big-item'>{getMyAge()}</li>
				<li className='about-table-big-item'>
					<a
						className='about-table-big-link'
						href='https://www.google.com/maps/search/Yerevan+City/@40.1895528,44.4727211,13z/data=!3m1!4b1?shorturl=1'
						target='_blank'
						rel='noopener noreferrer'
					>
						{locale === "en" ? "Armenia, Yerevan" : "Հայաստան, Երևան"}
					</a>
				</li>
				<li className='about-table-big-item'>
					<a className='about-table-big-link' href='tel:+37441351030'>
						{`(+374) [041] 351030`}
					</a>
				</li>
				<li className='about-table-big-item'>
					<a href='mailto:narek07012020@gmail.com'>narek07012020@gmail.com</a>
				</li>
			</ul>
			<DownloadButton />
		</div>
	)
}
export default BigTable
