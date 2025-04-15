/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				inconsolata: ['Inconsolata', 'sans-serif'],
			},
			colors: {
				main: '#E6EEFF',
				secondary: '#B1B6BF',
				under: '#A6874A',
				warning: '#FFB937',
				background: '#b1b6bf2f',
				backgroundHover: '#b1b6bf5f',
				backgroundMain: '#121418'
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}
