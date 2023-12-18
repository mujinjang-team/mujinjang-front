import React from 'react'
import dayjs from 'dayjs'
import {
	CouponCardWrapper,
	CouponCardIconWrapper,
	CouponCardInfoWrapper,
	CouponCardInfoRow,
	CouponCardInfoTitle,
	CouponCardInfoContent,
	CouponCardIdWrapper,
} from './CouponCard.styles'
import CouponIcon from '@/assets/icons/icon-coupon.svg'
import { CouponCardProps } from '@/types/Coupon.types'

const CouponCard = ({ coupon }: CouponCardProps) => {
	const { couponId, name, code, type, discount, amount, remainCouponNum, createdAt } = coupon
	const formattedCreatedTime = dayjs(createdAt).format('YYYY-MM-DD')

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
					<CouponCardInfoTitle>쿠폰 할인 정보</CouponCardInfoTitle>
					<CouponCardInfoContent>
						{discount}
						{type === 'FIXED' ? '원' : '%'}
					</CouponCardInfoContent>
				</CouponCardInfoRow>
				<CouponCardInfoRow>
					<CouponCardInfoTitle>쿠폰 발급 수량</CouponCardInfoTitle>
					<CouponCardInfoContent>{amount}</CouponCardInfoContent>
				</CouponCardInfoRow>
				<CouponCardInfoRow>
					<CouponCardInfoTitle>쿠폰 잔여 수량</CouponCardInfoTitle>
					<CouponCardInfoContent>{remainCouponNum}</CouponCardInfoContent>
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

export default CouponCard
