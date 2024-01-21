/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				blue500: '#4285f4',
				blue300: '#8ab4f8',
				green500: '#34a853',
				green300: '#81c995',
				yellow600: '#f9ab00',
				yellow200: '#fde293',
				red500: '#ea4335',
				red300: '#f28b82',
				black: '#000000',
				grey700: '#5f6368',
				grey100: '#f1f3f4',
				white: '#fbfcff'
			},
			fontSize: {
				header: '3.75rem',
				h2: '2.5rem',
				subheader: '1rem',
				body1: '1.25rem'
			},
			fontWeight: {
				normal: 400,
				bold: 700
			}
		}
	},
	purge: {
		safelist: ['text-blue500', 'text-red500', 'text-green500', 'text-yellow600']
	},
	plugins: []
};
