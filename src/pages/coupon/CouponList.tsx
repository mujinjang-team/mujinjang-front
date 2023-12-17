import React, { useState } from 'react'
import {
	CouponListWrapper,
	CouponListEmptyViewWrapper,
	CouponListEmptyViewTitle,
	CouponListEmptyViewSubTitle,
} from '@/components/coupon/CouponList.styles'
import { CouponDataType } from '@/types/Coupon.types'
import CouponCard from '@/components/coupon/CouponCard'

const CouponList = () => {
	const [couponList] = useState<CouponDataType[]>([
		{
			couponId: 1,
			name: '테스트AA',
			code: 'AAA',
			type: 'AA',
			discount: 0,
			amount: 1,
			createdAt: '2023-12-17T06:57:22.025Z',
		},
		{
			couponId: 2,
			name: '테스트BB',
			code: 'BBB',
			type: 'AA',
			discount: 0,
			amount: 1,
			createdAt: '2023-12-17T06:57:22.025Z',
		},
	])

	if (couponList.length === 0) {
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
				<CouponCard coupon={coupon} key={coupon.couponId} />
			))}
		</CouponListWrapper>
	)
}

export default CouponList
