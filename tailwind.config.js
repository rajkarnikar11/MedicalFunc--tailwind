module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
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
