/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: "media",
	theme: {
		screens: {
			vsm: "400px",
			sm: "640px",
			mdm: "570px",
			md: "768px",
			mdl: "991px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
			sms: "1040px",
		},
		extend: {
			colors: {
				darkBG: "#1d1b19",
				lightBG: "#f5f5f4",
				gold: "#c9ae3f",
				lightChocolate: "#987750",
			},
		},
	},
	plugins: [],
}
