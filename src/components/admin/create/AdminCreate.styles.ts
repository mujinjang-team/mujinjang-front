import { TextField } from '@mui/material'
import styled from 'styled-components'

export const CouponCreateContainer = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	flex-direction: column;
	justify-content: center;
	padding: 0 12px;
	gap: 60px;
`

export const CreateAmountInputContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 28px;
`

export const CreateAmountGuideText = styled.span`
	font-size: 32px;
	font-weight: 500;
`

export const CreateAmountInput = styled(TextField).attrs({
	type: 'number',
	placeholder: 'Type Number',
})`
	* {
		font-size: 20px !important;
	}
`

export const CouponCreateButtonContainer = styled.div`
	display: flex;

	> * {
		width: 100%;
		font-size: 20px;
		padding: 20px;
	}
`
