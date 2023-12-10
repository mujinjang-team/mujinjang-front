import styled from 'styled-components'

export const UserContainer = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	flex-direction: column;
	justify-content: center;
	padding: 0 12px;
	gap: 60px;
`

export const UserInfoContainer = styled.div`
	display: flex;
	justify-content: center;
`

export const UserInfo = styled.span`
	font-size: 32px;
	font-weight: 500;
`

export const CouponControlContainer = styled.div`
	display: flex;

	> * {
		width: 100%;
		font-size: 20px;
		padding: 20px;
	}
`
