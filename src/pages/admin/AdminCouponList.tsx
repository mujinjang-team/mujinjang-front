import React from 'react'
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid'
import {
	AdminCouponListContainer,
	AdminCouponListHeaderContainer,
	AdminCouponListContentContainer,
	AdminCouponListHeaderTitle,
	AdminCouponListEmptyViewSubTitle,
	AdminCouponListEmptyViewTitle,
	AdminCouponListEmptyViewWrapper,
} from '@/components/admin/coupon/list/AdminCouponList.styles'
import Button from '@/components/common/Button'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import LoadingView from '@/components/common/LoadingView'
import { useQuery } from '@tanstack/react-query'
import api from '@/libs/api'

const AdminCouponList = () => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['coupon/couponList'],
		queryFn: async () => {
			return await api.getCoupons()
		},
	})

	if (!data || !data.content || isError) {
		return (
			<AdminCouponListEmptyViewWrapper>
				<AdminCouponListEmptyViewTitle>쿠폰 데이터가 조회되지 않아요</AdminCouponListEmptyViewTitle>
				<AdminCouponListEmptyViewSubTitle>잠시 후 다시 시도해 주세요</AdminCouponListEmptyViewSubTitle>
			</AdminCouponListEmptyViewWrapper>
		)
	}

	const rows: GridRowsProp = data.content

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
				return dayjs(params.value).format('YYYY-MM-DD')
			},
		},
	]

	if (isLoading) {
		return <LoadingView />
	}

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
