import styled from 'styled-components'

export const CouponListWrapper = styled.div`
	display: flex;
	max-width: 800px;
	height: 100%;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
	padding-top: 20px;
	gap: 28px;
`

export const CouponCardWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 32px;
	width: 100%;
	padding: 24px 36px;
	border-radius: 8px;
	box-shadow:
		0 3px 6px rgba(0, 0, 0, 0.16),
		0 3px 6px rgba(0, 0, 0, 0.23);
	cursor: pointer;
`

export const CouponCardIdWrapper = styled.div`
	display: inline-flex;
	position: absolute;
	top: 8px;
	left: 8px;
	font-size: 10px;
	color: #9c9c9c;
`

export const CouponCardIconWrapper = styled.div`
	display: inline-flex;
	width: 5rem;
	height: 5rem;

	> img {
		width: 100%;
		height: 100%;
	}
`

export const CouponCardInfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
`

export const CouponCardInfoRow = styled.div`
	display: flex;
	flex-direction: row;
	width: 280px;
	gap: 16px;
`

export const CouponCardInfoTitle = styled.div`
	display: inline-flex;
	min-width: 80px;
	font-weight: 600;
`

export const CouponCardInfoContent = styled.div`
	display: inline-flex;
	justify-content: start;
	align-items: center;
`

export const CouponListEmptyViewWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: center;
	align-items: center;
	gap: 32px;
`

export const CouponListEmptyViewTitle = styled.div`
	font-size: 2rem;
	font-weight: bold;
`

export const CouponListEmptyViewSubTitle = styled.p`
	font-size: 1rem;
	font-weight: 500;
`
