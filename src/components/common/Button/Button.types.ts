import { ButtonHTMLAttributes } from 'react'
import { DefaultTheme } from 'styled-components'

export type ButtonVariant = 'blue' | 'black' | 'white' | 'red'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: ButtonVariant
	stretch?: boolean
	isLoading?: boolean
	as?: 'a' | 'button'
}

export type ButtonStyleProps = { theme: DefaultTheme } & ButtonProps
