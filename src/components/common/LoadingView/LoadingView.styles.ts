import styled from 'styled-components'

export const LoadingViewWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
	gap: 32px;
`

export const LoadingViewIconWrapper = styled.div`
	display: inline-flex;
	width: 60px;
	height: 60px;

	> img {
		width: 100%;
		height: 100%;
	}
`

export const LoadingViewGuideText = styled.div`
	font-size: 2rem;
	font-weight: 500;
`
