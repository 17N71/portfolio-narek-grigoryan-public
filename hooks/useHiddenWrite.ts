import { useEffect, useState } from "react"
import { useLocalStorage } from "@/hooks"
export default function useHiddenWrite(word: string) {
	const [write, setWrite] = useState<string>("")
	const [find, setFind] = useLocalStorage(word, false)
	useEffect(() => {
		if (write.match(word)) {
			setFind(true)
			setWrite("")
		}
		function getLetter(e: globalThis.KeyboardEvent) {
			setWrite((write) => (write.split(" ").length ? write + e.key : e.key))
		}
		window.addEventListener("keydown", getLetter)

		return () => window.removeEventListener("keydown", getLetter)
	}, [write])
	return [find, setFind] as const
}
