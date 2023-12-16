import { TextField } from '@mui/material'
import styled from 'styled-components'

export const AdminCouponCreateContainer = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	flex-direction: column;
	justify-content: center;
	padding: 0 12px;
	gap: 60px;
`

export const AdminCreateAmountInputContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 28px;
`

export const AdminCouponCreateAmountGuideText = styled.span`
	font-size: 32px;
	font-weight: 500;
`

export const AdminCouponCreateAmountInput = styled(TextField).attrs({
	type: 'number',
	placeholder: 'Type Number',
})`
	* {
		font-size: 20px !important;
	}
`

export const AdminCouponCreateButtonContainer = styled.div`
	display: flex;

	> * {
		width: 100%;
		font-size: 20px;
		padding: 20px;
	}
`
