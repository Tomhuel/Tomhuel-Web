import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				cyber: ['Orbitron', 'sans-serif']
			},
			colors: {
				crimson: '#bf0120',
				lightblue: '#00ffff'
			}
		}
	},
	plugins: []
} satisfies Config;
