/** @type {import('tailwindcss').Config} */

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
			sm: '',
			base: '',
			lg: '1.5rem',
			xl: '1.875rem',
			'3xl': '2rem',
			'4xl': '2.5rem',
			'5xl': '3rem',
		},
		extend: {
			lineHeight: {
				'leading-snug': '1.3',
			},
		},
	},
	plugins: [require("daisyui")],
}