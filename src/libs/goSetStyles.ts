import { CSSObject } from 'styled-components'

const goSetStyles =
	<Props extends Record<string, any>>(...fns: ((props: Props) => CSSObject | null)[]) =>
	(props: Props) =>
		fns.reduce((acc, fn) => {
			const style = fn(props)

			if (style) {
				return Object.assign(acc, style)
			} else {
				return acc
			}
		}, {})

export default goSetStyles
