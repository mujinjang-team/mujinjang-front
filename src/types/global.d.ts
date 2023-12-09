declare type Keys<T extends Record<string | number | symbol, any>> = keyof T

declare type Values<T extends Record<string | number | symbol, any>> = T[keyof T]

declare module '*.svg' {
	import React = require('react')
	export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>
	const src: string
	export default src
}
