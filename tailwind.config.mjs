/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '3rem',
				xl: '4rem',
				'2xl': '3.5rem',
			}
		},	
		fontSize: {
			sm: '.75rem',
			base: '1rem',
			lg: '1.5rem',
			xl: '1.875rem',
			'3xl': '2rem',
			'4xl': '2.5rem',
			'5xl': '2.75rem',
		},
		extend: {
			fontFamily: {
				'sans': ['roboto', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	daisyui: {
		themes: [
		  {
			dark: {
			  ...require("daisyui/src/theming/themes")["dark"],
			  "primary": "#01e9a3",
			  "secondary": "#e1fe53",
			  "accent": "#75158c",
			},
		  },
		],
	  },

	plugins: [require("daisyui")],
}

