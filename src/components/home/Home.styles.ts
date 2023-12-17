import { TextField } from '@mui/material'
import styled from 'styled-components'

export const HomeContainer = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	flex-direction: column;
	justify-content: space-between;
	padding: 20px 12px;
	gap: 20px;

	* {
		width: 100%;
	}
`

export const SectionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`

export const SectionTitle = styled.div`
	font-size: 2rem;
	font-weight: bold;
`

export const UserContainer = styled.div`
	display: flex;
	gap: 20px;
	align-items: center;
`

export const UserSeqInput = styled(TextField).attrs({
	type: 'number',
	placeholder: 'User Id를 입력해 주세요',
})`
	* {
		font-size: 20px !important;
	}
`

export const AdminContainer = styled.div`
	display: flex;
	gap: 20px;
`
