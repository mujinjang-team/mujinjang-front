import React from 'react'
import MujinjangLogo from '@/components/common/MujinjangLogo'
import { HeaderWrapper } from '../Layout.styles'
import { LogoLink } from './Header.styles'

const MainHeader = () => {
	return (
		<HeaderWrapper>
			<LogoLink to="/">
				<MujinjangLogo />
			</LogoLink>
		</HeaderWrapper>
	)
}

export default MainHeader
