import getFile from "@/custom/getFile"
import { LocaleContext } from "@/pages"
import { useContext } from "react"
import { ImCloudDownload } from "react-icons/im"
function DownloadButton() {
	const { locale } = useContext(LocaleContext)
	return (
		<button type='button' onClick={() => getFile("NarekGrigoryan.pdf")} className='download-button'>
			<span>{locale === "en" ? "Download CV" : "Ներբեռնել CV ին"}</span>
			<ImCloudDownload
				size={32}
				title={locale === "en" ? "Download CV" : "Ներբեռնել CV ին" + " Narek Grigoryan"}
			/>
		</button>
	)
}

export default DownloadButton
