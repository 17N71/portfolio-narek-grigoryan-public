import { ReactNode } from "react"
import { MatchMediaHOC } from "react-match-media"
import BigHomeLeft from "../BigHomeLeft"
import HomeLeft from "../HomeLeft"
const MediaHomeLeft = MatchMediaHOC(HomeLeft, "(min-width: 1040px)")
const MediaBigHomeLeft = MatchMediaHOC(BigHomeLeft, "(max-width: 1040px)")
function HomeWrapper({ children, isSize, memoedIsSize }: IHomeWrapperProps) {
	return (
		<>
			<MediaHomeLeft isSize={isSize} memoedIsSize={memoedIsSize}>
				{children}
			</MediaHomeLeft>
			<MediaBigHomeLeft>{children}</MediaBigHomeLeft>
		</>
	)
}

export default HomeWrapper
interface IHomeWrapperProps {
	children: ReactNode
	isSize: boolean
	memoedIsSize: boolean
}
