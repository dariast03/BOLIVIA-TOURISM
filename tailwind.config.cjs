const config = {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],

	plugins: [require('flowbite/plugin')],

	darkMode: 'class',

	theme: {
		extend: {
			colors: {
				// flowbite-svelte
				primary: {
					100: "#d1e1e7",
					200: "#a2c4cf",
					300: "#74a6b7",
					400: "#45899f",
					500: "#176b87",
					600: "#12566c",
					700: "#0e4051",
					800: "#092b36",
					900: "#05151b"
				},
				/* primary: {
					50: '#FFF5F2',
					100: '#FFF1EE',
					200: '#FFE4DE',
					300: '#FFD5CC',
					400: '#FFBCAD',
					500: '#FE795D',
					600: '#EF562F',
					700: '#EB4F27',
					800: '#CC4522',
					900: '#A5371B'
				} */
			}
		}
	}
};

module.exports = config;