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
				lightblue: '#00ffff',
				'linkedin-blue': '#0077B5',
				'cool-pink': '#f0f',
				'light-pink': '#ffb3ff'
			}
		}
	},
	plugins: []
} satisfies Config;
