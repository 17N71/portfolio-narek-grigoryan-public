import { useMouseMove } from "@/hooks"

function MouseMove() {
	const [secondaryCursor, mainCursor, activeMouse] = useMouseMove()

	return (
		<>
			<span className='main-cursor' ref={mainCursor}>
				<span className='main-cursor-background' />
			</span>
			<span className={`secondary-cursor ${activeMouse ? "related" : ""}`} ref={secondaryCursor}>
				<span className='cursor-background' />
			</span>
		</>
	)
}

export default MouseMove
