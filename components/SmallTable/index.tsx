import { LocaleContext } from "@/pages"
import { useContext } from "react"
export function getMyAge() {
	const dob = new Date("04/21/2001")
	const month_diff = Date.now() - dob.getTime()
	const age_dt = new Date(month_diff)
	const year = age_dt.getUTCFullYear()
	const age = Math.abs(year - 1970)
	return age
}
function SmallTable() {
	const { locale } = useContext(LocaleContext)

	return (
		<ul className='about-table-small-table'>
			<li className='about-table-small-item'>{locale === "en" ? "Name" : "Անուն"}</li>
			<li className='about-table-small-item'>
				{locale === "en" ? "Narek Grigoryan" : "Նարեկ Գրիգորյան"}
			</li>
			<li className='about-table-small-item'>{locale === "en" ? "Age" : "Տարիք"}</li>
			<li className='about-table-small-item'>{getMyAge()}</li>
			<li className='about-table-small-item'>{locale === "en" ? "Address" : "Հասցե"}</li>
			<li className='about-table-small-item'>
				<a
					className='about-table-small-link'
					href='https://www.google.com/maps/search/Yerevan+City/@40.1895528,44.4727211,13z/data=!3m1!4b1?shorturl=1'
					target='_blank'
					rel='noopener noreferrer'
				>
					{locale === "en" ? "Armenia, Yerevan" : "Հայաստան, Երևան"}
				</a>
			</li>
			<li className='about-table-small-item'>{locale === "en" ? "Phone" : "Հեռախոսահամար"}</li>
			<li className='about-table-small-item'>
				<a className='about-table-small-link' href='tel:+37441351030'>
					{`(+374) [041] 351030`}
				</a>
			</li>
			<li className='about-table-small-item'>{locale === "en" ? "Mail" : "էլ.փոստ"}</li>
			<li className='about-table-small-item'>
				<a href='mailto:narek07012020@gmail.com'>narek07012020@gmail.com</a>
			</li>
		</ul>
	)
}

export default SmallTable
