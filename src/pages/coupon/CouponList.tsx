import React, { useState } from 'react'
import {
	CouponListWrapper,
	CouponListEmptyViewWrapper,
	CouponListEmptyViewTitle,
	CouponListEmptyViewSubTitle,
	CouponCardWrapper,
	CouponCardIconWrapper,
	CouponCardInfoWrapper,
	CouponCardInfoRow,
	CouponCardInfoTitle,
	CouponCardInfoContent,
	CouponCardIdWrapper,
} from '@/components/coupon/CouponList.styles'
import CouponIcon from '@/assets/icons/icon-coupon.svg'
import { CouponDataType } from '@/types/Coupon.types'
import dayjs from 'dayjs'

type CouponCardProps = {
	coupon: CouponDataType
}

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

const CouponCard = ({ coupon }: CouponCardProps) => {
	const { couponId, name, code, type, discount, amount, createdAt } = coupon
	const formattedCreatedTime = dayjs(createdAt).format('YYYY-MM-DD HH:MM')

	return (
		<CouponCardWrapper>
			<CouponCardIconWrapper>
				<img src={CouponIcon} alt="Coupon Icon" />
			</CouponCardIconWrapper>
			<CouponCardInfoWrapper>
				<CouponCardInfoRow>
					<CouponCardInfoTitle>쿠폰 이름</CouponCardInfoTitle>
					<CouponCardInfoContent>{name}</CouponCardInfoContent>
				</CouponCardInfoRow>
				<CouponCardInfoRow>
					<CouponCardInfoTitle>쿠폰 코드</CouponCardInfoTitle>
					<CouponCardInfoContent>{code}</CouponCardInfoContent>
				</CouponCardInfoRow>
				<CouponCardInfoRow>
					<CouponCardInfoTitle>쿠폰 타입</CouponCardInfoTitle>
					<CouponCardInfoContent>{type}</CouponCardInfoContent>
				</CouponCardInfoRow>
				<CouponCardInfoRow>
					<CouponCardInfoTitle>쿠폰 할인율</CouponCardInfoTitle>
					<CouponCardInfoContent>{discount}%</CouponCardInfoContent>
				</CouponCardInfoRow>
				<CouponCardInfoRow>
					<CouponCardInfoTitle>쿠폰 발급 수량</CouponCardInfoTitle>
					<CouponCardInfoContent>{amount}</CouponCardInfoContent>
				</CouponCardInfoRow>
				<CouponCardInfoRow>
					<CouponCardInfoTitle>쿠폰 발급 일자</CouponCardInfoTitle>
					<CouponCardInfoContent>{formattedCreatedTime}</CouponCardInfoContent>
				</CouponCardInfoRow>
			</CouponCardInfoWrapper>
			<CouponCardIdWrapper>Coupon No. {couponId}</CouponCardIdWrapper>
		</CouponCardWrapper>
	)
}
