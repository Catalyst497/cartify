/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			brush: 'Comforter Brush, cursive',
			jost: 'Jost, sans-serif'
		},
		extend: {
      colors:{
        'darkGray': '#616161',
		'fairGray': '#dbdbd9',
      }
		},
	},
	plugins: [],
};
