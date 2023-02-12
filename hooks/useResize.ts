import { useEffect, useState, useMemo } from "react"

export default function useResize(
	screenSize: number,
	[...states]: any[],
	direction: "big" | "small" = "big"
) {
	const [size, setSize] = useState<number>(0)
	const [isSze, setIsSize] = useState<boolean>(false)
	const memoizedIsSize = useMemo(() => {
		return isSze
	}, [isSze, ...states])
	function resizeHandle() {
		setSize(window.innerWidth)
		if (size >= screenSize) {
			if (direction === "big") {
				setIsSize(true)
			} else {
				setIsSize(false)
			}
		}
		if (size <= screenSize) {
			if (direction === "small") {
				setIsSize(true)
			} else {
				setIsSize(false)
			}
		}
	}
	useEffect(() => {
		window.addEventListener("resize", resizeHandle)
		return () => window.removeEventListener("resize", resizeHandle)
	}, [size, ...states])

	return [memoizedIsSize] as const
}
