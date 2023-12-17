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

	> * {
		cursor: pointer;
	}
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
