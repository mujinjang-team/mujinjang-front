import React from 'react'
import MujinjangLogo from '@/components/common/MujinjangLogo'
import { HeaderContainer, HeaderWrapper } from '../Layout.styles'
import { LogoLink, LogoutButton } from './Header.styles'
import localStorage from '@/libs/localStorage'
import { useNavigate } from 'react-router'

const MainHeader = () => {
	const navigate = useNavigate()

	const loginUserSeq = localStorage.getItem('user')
	const onClickLogoutButton = () => {
		localStorage.removeItem('user')
		navigate('/')
	}

	return (
		<HeaderWrapper>
			<HeaderContainer>
				<LogoLink to={!!loginUserSeq ? '/coupon/list' : '/'}>
					<MujinjangLogo />
				</LogoLink>
				{!!loginUserSeq && <LogoutButton onClick={onClickLogoutButton}>로그아웃</LogoutButton>}
			</HeaderContainer>
		</HeaderWrapper>
	)
}

export default MainHeader
