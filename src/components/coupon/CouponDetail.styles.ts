import styled from 'styled-components'

export const CouponDetailContainer = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	flex-direction: column;
	justify-content: center;
	padding: 0 12px;
	gap: 12px;
`

export const CouponCardContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
`

export const CouponDetailInfoContainer = styled.div`
	display: flex;
	justify-content: start;
`

export const CouponDetailInfo = styled.span`
	font-size: 1.5rem;
	font-weight: bold;
`

export const CouponControlContainer = styled.div`
	display: flex;
	margin-top: 60px;

	> * {
		width: 100%;
		font-size: 20px;
		padding: 20px;
	}
`
