/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			fontFamily: {
				inter: ['var(--font-inter)'],
				bakbak: ['var(--font-bakbak)'],
			},
			colors: {
				primary: '#00FF00',
				'primary-hover': '#00DD00',
			},
		},
	},
	plugins: [],
};
