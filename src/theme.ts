
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const joshTheme: CustomThemeConfig = {
    name: 'joshTheme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #ab5a1f 
		"--color-primary-50": "242 230 221", // #f2e6dd
		"--color-primary-100": "238 222 210", // #eeded2
		"--color-primary-200": "234 214 199", // #ead6c7
		"--color-primary-300": "221 189 165", // #ddbda5
		"--color-primary-400": "196 140 98", // #c48c62
		"--color-primary-500": "171 90 31", // #ab5a1f
		"--color-primary-600": "154 81 28", // #9a511c
		"--color-primary-700": "128 68 23", // #804417
		"--color-primary-800": "103 54 19", // #673613
		"--color-primary-900": "84 44 15", // #542c0f
		// secondary | #4264ea 
		"--color-secondary-50": "227 232 252", // #e3e8fc
		"--color-secondary-100": "217 224 251", // #d9e0fb
		"--color-secondary-200": "208 216 250", // #d0d8fa
		"--color-secondary-300": "179 193 247", // #b3c1f7
		"--color-secondary-400": "123 147 240", // #7b93f0
		"--color-secondary-500": "66 100 234", // #4264ea
		"--color-secondary-600": "59 90 211", // #3b5ad3
		"--color-secondary-700": "50 75 176", // #324bb0
		"--color-secondary-800": "40 60 140", // #283c8c
		"--color-secondary-900": "32 49 115", // #203173
		// tertiary | #af4783 
		"--color-tertiary-50": "243 227 236", // #f3e3ec
		"--color-tertiary-100": "239 218 230", // #efdae6
		"--color-tertiary-200": "235 209 224", // #ebd1e0
		"--color-tertiary-300": "223 181 205", // #dfb5cd
		"--color-tertiary-400": "199 126 168", // #c77ea8
		"--color-tertiary-500": "175 71 131", // #af4783
		"--color-tertiary-600": "158 64 118", // #9e4076
		"--color-tertiary-700": "131 53 98", // #833562
		"--color-tertiary-800": "105 43 79", // #692b4f
		"--color-tertiary-900": "86 35 64", // #562340
		// success | #64c61c 
		"--color-success-50": "232 246 221", // #e8f6dd
		"--color-success-100": "224 244 210", // #e0f4d2
		"--color-success-200": "216 241 198", // #d8f1c6
		"--color-success-300": "193 232 164", // #c1e8a4
		"--color-success-400": "147 215 96", // #93d760
		"--color-success-500": "100 198 28", // #64c61c
		"--color-success-600": "90 178 25", // #5ab219
		"--color-success-700": "75 149 21", // #4b9515
		"--color-success-800": "60 119 17", // #3c7711
		"--color-success-900": "49 97 14", // #31610e
		// warning | #b46d3f 
		"--color-warning-50": "244 233 226", // #f4e9e2
		"--color-warning-100": "240 226 217", // #f0e2d9
		"--color-warning-200": "236 219 207", // #ecdbcf
		"--color-warning-300": "225 197 178", // #e1c5b2
		"--color-warning-400": "203 153 121", // #cb9979
		"--color-warning-500": "180 109 63", // #b46d3f
		"--color-warning-600": "162 98 57", // #a26239
		"--color-warning-700": "135 82 47", // #87522f
		"--color-warning-800": "108 65 38", // #6c4126
		"--color-warning-900": "88 53 31", // #58351f
		// error | #c13c2d 
		"--color-error-50": "246 226 224", // #f6e2e0
		"--color-error-100": "243 216 213", // #f3d8d5
		"--color-error-200": "240 206 203", // #f0cecb
		"--color-error-300": "230 177 171", // #e6b1ab
		"--color-error-400": "212 119 108", // #d4776c
		"--color-error-500": "193 60 45", // #c13c2d
		"--color-error-600": "174 54 41", // #ae3629
		"--color-error-700": "145 45 34", // #912d22
		"--color-error-800": "116 36 27", // #74241b
		"--color-error-900": "95 29 22", // #5f1d16
		// surface | #25252e 
		"--color-surface-50": "222 222 224", // #dedee0
		"--color-surface-100": "211 211 213", // #d3d3d5
		"--color-surface-200": "201 201 203", // #c9c9cb
		"--color-surface-300": "168 168 171", // #a8a8ab
		"--color-surface-400": "102 102 109", // #66666d
		"--color-surface-500": "37 37 46", // #25252e
		"--color-surface-600": "33 33 41", // #212129
		"--color-surface-700": "28 28 35", // #1c1c23
		"--color-surface-800": "22 22 28", // #16161c
		"--color-surface-900": "18 18 23", // #121217
		
	}
}