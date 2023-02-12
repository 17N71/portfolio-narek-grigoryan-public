import { LocaleContext } from "@/pages"
import { IDateHeadingProps } from "@/types/DateHeadingInterface"
import { format } from "date-fns"
import { enUS, hy } from "date-fns/locale"
import { useContext } from "react"

const DateHeading = ({ tabDateFrom, tabDateTo }: IDateHeadingProps) => {
	const { locale } = useContext(LocaleContext)
	return (
		<div className='dateHeading'>
			<span>
				{tabDateFrom &&
					format(new Date(tabDateFrom), "yyyy MMMM", {
						locale: locale === "en" ? enUS : hy,
					})}
				{` - `}
			</span>
			<span>
				{tabDateTo &&
					format(new Date(tabDateTo), "yyyy MMMM", {
						locale: locale === "en" ? enUS : hy,
					})}
			</span>
		</div>
	)
}

export default DateHeading
