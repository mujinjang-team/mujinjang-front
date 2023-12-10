import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.div.attrs({
	as: 'header',
})`
	display: flex;
	justify-content: space-between;
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
