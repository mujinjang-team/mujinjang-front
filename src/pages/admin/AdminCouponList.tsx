import React from 'react'
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid'
import {
	AdminCouponListContainer,
	AdminCouponListHeaderContainer,
	AdminCouponListContentContainer,
	AdminCouponListHeaderTitle,
} from '@/components/admin/coupon/list/AdminCouponList.styles'
import Button from '@/components/common/Button'
import { Link } from 'react-router-dom'

const AdminCouponList = () => {
	const rows: GridRowsProp = [
		{
			id: 1,
			col1: 'Hello',
			col2: 'World',
		},
		{
			id: 2,
			col1: 'DataGridPro',
			col2: 'is Awesome',
		},
		{
			id: 3,
			col1: 'MUI',
			col2: 'is Amazing',
		},
	]

	const columns: GridColDef[] = [
		{
			field: 'col1',
			headerName: 'Column 1',
			width: 150,
		},
		{
			field: 'col2',
			headerName: 'Column 2',
			width: 150,
		},
	]

	return (
		<AdminCouponListContainer>
			<AdminCouponListHeaderContainer>
				<AdminCouponListHeaderTitle>쿠폰 대시보드</AdminCouponListHeaderTitle>
				<Link to="/admin/coupon/create">
					<Button variant="blue">쿠폰 발급하기</Button>
				</Link>
			</AdminCouponListHeaderContainer>
			<AdminCouponListContentContainer>
				<DataGrid rows={rows} columns={columns} />
			</AdminCouponListContentContainer>
		</AdminCouponListContainer>
	)
}

export default AdminCouponList
