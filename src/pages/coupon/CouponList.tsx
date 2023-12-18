import React from 'react'
import {
	CouponListWrapper,
	CouponListEmptyViewWrapper,
	CouponListEmptyViewTitle,
	CouponListEmptyViewSubTitle,
} from '@/components/coupon/CouponList.styles'
import { CouponDataType } from '@/types/Coupon.types'
import CouponCard from '@/components/coupon/CouponCard'
import withAuthCheck from '@/containers/withAuthCheck'
import { Link } from 'react-router-dom'
import localStorage from '@/libs/localStorage'
import { useQuery } from '@tanstack/react-query'
import api from '@/libs/api'
import LoadingView from '@/components/common/LoadingView'

const CouponList = () => {
	const userSeq = localStorage.getItem('user')
	console.log(userSeq)

	const { data, isLoading, isError } = useQuery({
		queryKey: ['coupon/couponList'],
		queryFn: async () => {
			return await api.getCoupons()
		},
	})

	const couponList: CouponDataType[] = (data?.content as CouponDataType[]) || []

	if (isLoading) {
		return <LoadingView />
	}

	if (isError || couponList.length === 0) {
		return (
			<CouponListEmptyViewWrapper>
				<CouponListEmptyViewTitle>발급받을 수 있는 쿠폰이 없어요 🥲</CouponListEmptyViewTitle>
				<CouponListEmptyViewSubTitle>새로운 쿠폰이 등장하길 기다려 주세요!</CouponListEmptyViewSubTitle>
			</CouponListEmptyViewWrapper>
		)
	}

	return (
		<CouponListWrapper>
			{couponList.map((coupon) => (
				<Link to={`/coupon/detail/${coupon.couponId}`} key={coupon.couponId}>
					<CouponCard coupon={coupon} />
				</Link>
			))}
		</CouponListWrapper>
	)
}

export default withAuthCheck(CouponList)
