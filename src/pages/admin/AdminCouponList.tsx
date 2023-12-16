import React from 'react'
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid'
import {
	AdminCouponListContainer,
	AdminCouponListHeaderContainer,
	AdminCouponListContentContainer,
	AdminCouponListHeaderTitle,
	AdminCouponListHeaderSubTitle,
	AdminCouponListHeaderContent,
	AdminCouponListHeaderContentRow,
} from '@/components/admin/coupon/list/AdminCouponList.styles'

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
				<AdminCouponListHeaderTitle>쿠폰 생성 현황</AdminCouponListHeaderTitle>
				<AdminCouponListHeaderContentRow>
					<AdminCouponListHeaderSubTitle>발급 건수</AdminCouponListHeaderSubTitle>
					<AdminCouponListHeaderContent>1000건</AdminCouponListHeaderContent>
				</AdminCouponListHeaderContentRow>
				<AdminCouponListHeaderContentRow>
					<AdminCouponListHeaderSubTitle>선착순 사용 가능 갯수</AdminCouponListHeaderSubTitle>
					<AdminCouponListHeaderContent>100건</AdminCouponListHeaderContent>
				</AdminCouponListHeaderContentRow>
			</AdminCouponListHeaderContainer>
			<AdminCouponListContentContainer>
				<DataGrid rows={rows} columns={columns} />
			</AdminCouponListContentContainer>
		</AdminCouponListContainer>
	)
}

export default AdminCouponList
