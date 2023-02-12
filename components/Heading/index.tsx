import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"

function Heading({
	children,
	tag = "h2",
	upper = false,
	center = false,
	className = "",
	...DefaultProps
}: HeadingTypes) {
	switch (tag) {
		case "h1":
			return (
				<h1
					className={`${className}  ${center ? "heading-centered" : ""} ${
						upper ? "heading-upper" : ""
					}`}
					{...DefaultProps}
				>
					{children}
				</h1>
			)
		case "h2":
			return (
				<h2
					className={`heading-h2  ${className} ${center ? "heading-centered" : ""} ${
						upper ? "heading-upper" : ""
					}`}
					{...DefaultProps}
				>
					{children}
				</h2>
			)
		case "h3":
			return (
				<h3
					className={`heading-h3  ${className} ${center ? "heading-centered" : ""} ${
						upper ? "heading-upper" : ""
					}`}
					{...DefaultProps}
				>
					{children}
				</h3>
			)
		case "h4":
			return (
				<h3
					className={`heading-h4  ${className} ${center ? "heading-centered" : ""} ${
						upper ? "heading-upper" : ""
					}`}
					{...DefaultProps}
				>
					{children}
				</h3>
			)
		case "h5":
			return (
				<h3
					className={`heading-h5  ${className} ${center ? "heading-centered" : ""} ${
						upper ? "heading-upper" : ""
					}`}
					{...DefaultProps}
				>
					{children}
				</h3>
			)
		case "h6":
			return (
				<h6
					className={`heading-h6  ${className} ${center ? "heading-centered" : ""} ${
						upper ? "heading-upper" : ""
					}`}
					{...DefaultProps}
				>
					{children}
				</h6>
			)
		default:
			return (
				<h2
					className={`heading-h2  ${className} ${center ? "heading-centered" : ""} ${
						upper ? "heading-upper" : ""
					}`}
					{...DefaultProps}
				>
					{children}
				</h2>
			)
	}
}

export default Heading

interface HeadingTypes
	extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
	children: ReactNode
	tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
	className?: string
	upper?: boolean
	center?: boolean
}
