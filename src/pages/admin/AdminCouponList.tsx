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
import dayjs from 'dayjs'

const AdminCouponList = () => {
	const rows: GridRowsProp = [
		{
			id: 1,
			couponId: 1,
			name: '테스트AA',
			code: 'AAA',
			type: 'FIXED',
			discount: 0,
			amount: 1,
			remainCouponNum: 1,
			createdAt: '2023-12-17T06:57:22.025Z',
		},
		{
			id: 2,
			couponId: 2,
			name: '테스트BB',
			code: 'BBB',
			type: 'PERCENTAGE',
			discount: 0,
			amount: 1,
			remainCouponNum: 1,
			createdAt: '2023-12-17T06:57:22.025Z',
		},
	]

	const columns: GridColDef[] = [
		{
			field: 'couponId',
			headerName: 'ID',
			width: 5,
		},
		{
			field: 'name',
			headerName: '이름',
			width: 120,
		},
		{
			field: 'code',
			headerName: '코드',
			width: 80,
		},
		{
			field: 'type',
			headerName: '타입',
			width: 80,
			valueFormatter(params) {
				switch (params.value) {
					case 'FIXED':
						return '금액 할인'
					case 'PERCENTAGE':
						return '퍼센트 할인'
				}
			},
		},
		{
			field: 'discount',
			headerName: '할인 수치',
			width: 100,
		},
		{
			field: 'amount',
			headerName: '발급 수량',
			width: 80,
		},
		{
			field: 'remainCouponNum',
			headerName: '잔여 수량',
			width: 80,
		},
		{
			field: 'createdAt',
			headerName: '발급 일시',
			width: 180,
			valueFormatter(params) {
				return dayjs(params.value).format('YYYY-MM-DD HH:mm:ss')
			},
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
				<DataGrid columns={columns} rows={rows} />
			</AdminCouponListContentContainer>
		</AdminCouponListContainer>
	)
}

export default AdminCouponList
