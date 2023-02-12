import ApolloConnecter from "@/apollo.client"
import MouseMove from "@/components/MouseMove"
import "@/styles/globals.scss"
import "@/styles/react-tab.scss"
import { Jost } from "@next/font/google"
import type { AppProps } from "next/app"
import { MatchMediaHOC } from "react-match-media"
const MediaMouseMove = MatchMediaHOC(MouseMove, "(min-width:1040px) and (min-height:800px) ")
const jost = Jost({
	subsets: ["latin", "latin-ext"],
	weight: ["400", "500", "600", "700", "900"],
})
function App({ Component, pageProps }: AppProps) {
	return (
		<ApolloConnecter>
			<MediaMouseMove />
			<style jsx global>{`
				*,
				*::after,
				*::before,
				html,
				body {
					font-family: ${jost.style.fontFamily};
				}
			`}</style>
			<Component {...pageProps} />
		</ApolloConnecter>
	)
}
export default App
