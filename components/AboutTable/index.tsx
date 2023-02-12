import { MatchMediaHOC } from "react-match-media"
import BigTable from "../BigTable"
import DownloadButton from "../DownloadButton"
import SmallTable from "../SmallTable"
const MediaSmallTable = MatchMediaHOC(SmallTable, "(max-width: 767px)")
const MediaBigTable = MatchMediaHOC(BigTable, "(min-width: 768px)")
const MediaDownloadButton = MatchMediaHOC(DownloadButton, "(max-width: 767px)")
function AboutTable() {
	return (
		<div className='about-tables'>
			<MediaSmallTable />
			<MediaBigTable />
			<MediaDownloadButton />
		</div>
	)
}

export default AboutTable
