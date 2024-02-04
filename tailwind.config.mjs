/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '1rem',
				lg: '2rem',
				xl: '3.5rem',
				'2xl': '3.5rem',
			}
		},	
		fontSize: {
			xs: '.5rem',
			sm: '.75rem',
			base: '1rem',
			md: '1.13rem',
			lg: '1.5rem',
			xl: '1.875rem',
			'3xl': '2rem',
			'4xl': '2.5rem',
			'5xl': '2.75rem',
		},
		extend: {
			fontFamily: {
				sans: ['roboto', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	daisyui: {
		themes: [
		  {
			dark: {
			  ...require("daisyui/src/theming/themes")["dark"],
			  "primary": "#7e22ce",
			  "secondary": "#fed7aa",
			  "accent": "#d946ef",
			},
		  },
		],
	  },

	plugins: [require("daisyui")],
}

