import React from 'react'
import { ButtonProps } from './Button.types'
import styled from 'styled-components'
import iconSpinner from '@/assets/icons/icon-spinner.svg'
import setButtonStyle from './styles'

const defaultProps: Pick<Required<ButtonProps>, 'variant' | 'as'> = {
	variant: 'white',
	as: 'button',
}

const Button = ({ disabled, isLoading, ...props }: ButtonProps) => {
	return (
		<StyledButton disabled={disabled || isLoading} {...props}>
			{isLoading ? <img src={iconSpinner} alt="spinner" /> : props.children}
		</StyledButton>
	)
}

export default Button

const StyledButton = styled.button<ButtonProps>`
	${(props) =>
		setButtonStyle({
			...defaultProps,
			...props,
		})}

	.loadingSpinner {
		width: 1.5em;
		height: 1.5em;
	}
`
