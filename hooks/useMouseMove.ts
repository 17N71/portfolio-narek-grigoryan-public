import { useEffect, useState, useRef } from "react"
import type { MutableRefObject } from "react"

export default function useMouseMove() {
	const [activeMouse, setActiveMouse] = useState<boolean>(false)
	const secondaryCursor = useRef<any>()
	const mainCursor = useRef<HTMLElement>() as MutableRefObject<HTMLElement>
	const positionRef = useRef({
		mouseX: 0,
		mouseY: 0,
		destinationX: 0,
		destinationY: 0,
		distanceX: 0,
		distanceY: 0,
		key: -1,
	})

	useEffect(() => {
		const MouseMoveHandle = (event: MouseEvent) => {
			const { clientX, clientY } = event
			const mouseX = clientX || 0
			const mouseY = clientY || 0
			positionRef.current.mouseX = mouseX - secondaryCursor?.current?.clientWidth / 2 || 0
			positionRef.current.mouseY = mouseY - secondaryCursor?.current?.clientHeight / 2 || 0
			mainCursor.current.style.transform = `translate3d(${
				mouseX - mainCursor?.current?.clientWidth / 2
			}px, ${mouseY - mainCursor?.current?.clientHeight / 2}px, 0)`
		}
		if (mainCursor.current && secondaryCursor.current) {
			document.addEventListener("mousemove", MouseMoveHandle)
		}
		return () => {
			document.removeEventListener("mousemove", MouseMoveHandle)
		}
	}, [])
	useEffect(() => {
		const followMouse = () => {
			positionRef.current.key = requestAnimationFrame(followMouse)
			const { mouseX, mouseY, destinationX, destinationY, distanceX, distanceY } =
				positionRef.current
			if (!destinationX || !destinationY) {
				positionRef.current.destinationX = mouseX
				positionRef.current.destinationY = mouseY
			} else {
				positionRef.current.distanceX = (mouseX - destinationX) * 0.1
				positionRef.current.distanceY = (mouseY - destinationY) * 0.1
				if (
					Math.abs(positionRef.current.distanceX) + Math.abs(positionRef.current.distanceY) <
					0.1
				) {
					positionRef.current.destinationX = mouseX
					positionRef.current.destinationY = mouseY
				} else {
					positionRef.current.destinationX += distanceX
					positionRef.current.destinationY += distanceY
				}
			}
			if (secondaryCursor.current) {
				secondaryCursor.current.style.transform =
					`translate3d(${destinationX}px, ${destinationY}px, 0)` || "translate3d(0,0,0)"
			}
		}
		followMouse()
	}, [])
	useEffect(() => {
		function searchRelated(e: any) {
			setActiveMouse(true)
			if (
				e.toElement.localName === "a" ||
				e.toElement.localName === "button" ||
				e.toElement.localName === "li"
			) {
				setActiveMouse(true)
			} else {
				setActiveMouse(false)
			}
		}
		window.addEventListener("mousemove", searchRelated)
		return () => window.removeEventListener("mousemove", searchRelated)
	}, [])
	return [secondaryCursor, mainCursor, activeMouse] as const
}
