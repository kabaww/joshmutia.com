import { join } from 'path'
import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin'
import { joshTheme } from './src/theme';

export default {
	darkMode: 'selector',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
			transitionTimingFunction: {
				'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
				'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
				'bruh': 'cubic-bezier(.32,0,.07,1)',
			},
			scale: {
				'3x': '3',
				'4x': '4',
			},
		},
	},
	plugins: [
		typography,
		skeleton({
			themes: {
				custom: [joshTheme],
				// preset: [
				// 	{
				// 		name: 'crimson',
				// 		enhancements: true,
				// 	},
				// ],
			},
		}),
	],
} satisfies Config;
