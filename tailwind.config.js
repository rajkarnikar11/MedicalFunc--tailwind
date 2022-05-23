module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			screens: {
				xs: "400px",
				// => @media (min-width: 400px) { ... }

				sm: "640px",
				// => @media (min-width: 640px) { ... }

				md: "768px",
				// => @media (min-width: 768px) { ... }

				lg: "1024px",
				// => @media (min-width: 1024px) { ... }

				xl: "1280px",
				// => @media (min-width: 1280px) { ... }

				"2xl": "1536px",
				// => @media (min-width: 1536px) { ... }
			},
			width: {
				"-half-screen": "-50vw",
			},
			colors: {
				transparent: "transparent",
				current: "currentColor",
				danger_color: "#E74040",
				primary_color: "#23A6F0",
				second_text_color: "#737373",
				muted_color: "#BDBDBD",
				light_text_color: "#FFFFFF",
				light_background_color: "#FFFFFF",
				alert_color: "#E77C40",
				success_color: "#2DC071",
				faded_secondary_color_2: "#FFDCD1",
				primary_text_color: "#23A6F0",
				text_color: "#252B42",
				secondary_color_1: "#40BB15",
				dark_background_color: "#252B42",
				faded_primary_color: "#B2E3FF",
				disabled_element_color: "#8EC2F2",
				secondary: "#F3CD03",
			},
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
			},
		},
	},
	plugins: [],
};
