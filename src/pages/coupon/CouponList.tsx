import React, { useState } from 'react'
import {
	CouponListWrapper,
	CouponListEmptyViewWrapper,
	CouponListEmptyViewTitle,
	CouponListEmptyViewSubTitle,
} from '@/components/coupon/CouponList.styles'

const CouponList = () => {
	const [couponList] = useState([])
	if (couponList.length === 0) {
		return (
			<CouponListEmptyViewWrapper>
				<CouponListEmptyViewTitle>발급받을 수 있는 쿠폰이 없어요 🥲</CouponListEmptyViewTitle>
				<CouponListEmptyViewSubTitle>새로운 쿠폰이 등장하길 기다려 주세요!</CouponListEmptyViewSubTitle>
			</CouponListEmptyViewWrapper>
		)
	}

	return <CouponListWrapper></CouponListWrapper>
}

export default CouponList
