
const colors = require('tailwindcss/colors');

module.exports = {
	content: [
		'./src/**/*.vue',
		'./src/**/*.js',
		'./src/**/*.jsx',
		'./src/**/*.html',
		'./src/**/*.md'
	],

	darkMode: 'class',
	theme: {

		
		extend: {
			colors: {
				'primary-light': '#F7F8FC',
				'secondary-light': '#9CA3AF',
				'ternary-light': '#f6f7f8',

				'primary-dark': '#0D2438',
				'secondary-dark': '#102D44',
				'ternary-dark': '#1E3851',
				'sky-blue-light': '#87CEEB',
				
				'primary-night-dark': '#1E1E1E'
				
			//	'primary-night-dark': '#000000'


			},
		
			
			
			container: {
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '5rem',
					xl: '6rem',
					'2xl': '8rem',
				},
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
