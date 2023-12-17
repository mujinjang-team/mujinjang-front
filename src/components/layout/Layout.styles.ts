import styled from 'styled-components'

export const HeaderWrapper = styled.div`
	position: fixed;
	top: 0;
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
	background-color: #ffffff;
	border-bottom: 1px solid #999;
	z-index: 99;
`

export const ContainerWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	max-width: 1000px;
	padding: 74px 12px 0 12px;
	margin: 0 auto;
	overflow-y: auto;
`
