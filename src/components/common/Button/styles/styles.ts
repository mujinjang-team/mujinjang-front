import { CSSObject } from 'styled-components'
import { ButtonStyleProps } from '../Button.types'

export const setDefaultStyle = (): CSSObject => {
	return {
		fontWeight: 500,
		cursor: 'pointer',
		border: '1px solid transparent',
	}
}

export const setVariantStyle = (props: ButtonStyleProps): CSSObject | null => {
	switch (props.variant) {
		case 'blue':
			return {
				backgroundColor: '#227EFF',
				color: '#FFFFFF',
				'@media (pointer: fine)': {
					':hover': {
						backgroundColor: '#1E60F7',
					},
				},
				'@media (pointer: coarse)': {
					':active': {
						backgroundColor: '#1E60F7',
					},
				},
			}
		case 'black':
			return {
				backgroundColor: '#20232B',
				color: '#FFFFFF',
				'@media (pointer: fine)': {
					':hover': {
						backgroundColor: '#404249',
					},
				},
				'@media (pointer: coarse)': {
					':active': {
						backgroundColor: '#404249',
					},
				},
			}
		case 'red':
			return {
				backgroundColor: '#F03E3E',
				color: '#FFFFFF',
				'@media (pointer: fine)': {
					':hover': {
						backgroundColor: '#DD342D',
					},
				},
				'@media (pointer: coarse)': {
					':active': {
						backgroundColor: '#DD342D',
					},
				},
			}
		case 'white':
			return {
				backgroundColor: '#FFFFFF',
				color: '#20232B',
				'@media (pointer: fine)': {
					':hover': {
						border: `1px solid #9FA1A4`,
					},
				},
				'@media (pointer: coarse)': {
					':active': {
						border: `1px solid #9FA1A4`,
					},
				},
			}

		default:
			return null
	}
}

export const setStretchStyle = (props: ButtonStyleProps): CSSObject | null => {
	return props.stretch ? { width: '100%' } : null
}

export const setDisableStyle = (props: ButtonStyleProps): CSSObject | null => {
	if (!props.disabled) {
		return null
	}

	switch (props.variant) {
		case 'white':
			return {
				backgroundColor: '#FFFFFF',
				color: '#EFF0F0',
				border: `1px solid #EFF0F0`,
				':hover': {
					backgroundColor: '#FFFFFF',
				},
			}
		default:
			return {
				backgroundColor: '#EFF0F0',
				color: '#FFFFFF',
				':hover': {
					backgroundColor: '#EFF0F0',
				},
			}
	}
}

export const setRoundStyle = (): CSSObject | null => {
	return null
}

export const setSizeStyle = (): CSSObject | null => {
	return {
		fontSize: '16px',
		lineHeight: '20px',
		padding: '12px 20px',
		borderRadius: '8px',
	}
}

export const setBorderStyle = (): CSSObject | null => {
	return null
}
