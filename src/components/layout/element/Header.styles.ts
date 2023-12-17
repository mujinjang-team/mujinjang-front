import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from '@/components/common/Button'

export const HeaderContainer = styled.div.attrs({
	as: 'header',
})`
	display: flex;
	justify-content: center;
	align-items: center;
`

export const HeaderItem = styled.div`
	display: inline-flex;
	justify-content: center;
	align-items: center;
`

export const LogoLink = styled(Link)`
	display: inline-flex;
	align-items: center;
`

export const LogoLinkText = styled.span`
	font-size: 18px;
	font-weight: 600;
`

export const LogoutButton = styled(Button)`
	position: absolute;
	right: 8px;
	top: 50%;
	transform: translate(0, -50%);
`
