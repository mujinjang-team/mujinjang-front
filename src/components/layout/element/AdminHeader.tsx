import React from 'react'
import MujinjangLogo from '@/components/common/MujinjangLogo'
import { HeaderWrapper } from '../Layout.styles'
import { LogoLink, LogoLinkText } from './Header.styles'

const AdminHeader = () => {
	return (
		<HeaderWrapper>
			<LogoLink to="/">
				<MujinjangLogo />
				<LogoLinkText>ADMIN</LogoLinkText>
			</LogoLink>
		</HeaderWrapper>
	)
}

export default AdminHeader
