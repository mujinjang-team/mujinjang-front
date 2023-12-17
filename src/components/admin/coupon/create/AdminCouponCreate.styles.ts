import { TextField } from '@mui/material'
import styled from 'styled-components'

export const AdminCouponCreateContainer = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	flex-direction: column;
	padding: 20px 12px 0 12px;
`

export const AdminCouponCreateTitle = styled.div`
	font-size: 2rem;
	font-weight: bold;
	margin-bottom: 28px;
`

export const AdminCouponCreateContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
`

export const AdminCouponCreateContentTitle = styled.div`
	font-size: 1.2rem;
	font-weight: 500;
	margin-bottom: 20px;
`

export const AdminCouponCreateContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	margin-bottom: 48px;
`

export const AdminCouponCreateContentItemWrapper = styled.div`
	display: flex;
	gap: 16px;
	align-items: center;
`

export const AdminCouponCreateContentItemTitle = styled.div`
	display: inline-flex;
	flex-basis: 150px;
	font-size: 1rem;
`

export const AdminCouponCreateContentItem = styled.div`
	display: inline-flex;
	justify-content: start;
	width: 100%;
`

export const StyledTextInput = styled(TextField)`
	width: 100%;

	* {
		font-size: 1rem;
	}
`

export const AdminCouponCreateButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;

	> * {
		width: 100%;
		font-size: 20px;
		padding: 20px;
	}
`
