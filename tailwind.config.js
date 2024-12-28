/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	purge: ["./*.{html,js}"],
	content: ["./**/*.{html,js}"],
	theme: {
		container: {
			center: true,
			padding: "1rem",
		},
		fontFamily: {
			body: ['"Raleway", "Open Sans"'],
			inter: ['"Inter", "Open Sans"'],
		},
		extend: {
			colors: {
				primary: {
					DEFAULT: "#1DD100",
					10: "#1DD1001A",
					40: "#1DD10066",
				},
				secondary: {
					DEFAULT: "#030712",
					0: "#03071200",
					5: "#0307120D",
					10: "#0307121A",
					40: "#03071266",
					50: "#03071280",
					60: "#03071299",
					70: "#030712B3",
					80: "#030712CC",
				},
				"off-white": {
					DEFAULT: "#F7F8F8",
				},
			},
		},
	},
	plugins: [],
};
