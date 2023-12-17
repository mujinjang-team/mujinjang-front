import React, { useState } from 'react'
import {
	CouponCardContainer,
	CouponControlContainer,
	CouponDetailContainer,
	CouponDetailInfo,
	CouponDetailInfoContainer,
} from '@/components/coupon/CouponDetail.styles'
import { useParams } from 'react-router-dom'
import {
	CouponUseAvaliableButton,
	CouponUsedButton,
	CouponCreateButton,
	CouponCreateDisableButton,
} from '@/components/coupon/CouponButton'
import withAuthCheck from '@/containers/withAuthCheck'
import localStorage from '@/libs/localStorage'
import CouponCard from '@/components/coupon/CouponCard'
import { CouponDataType } from '@/types/Coupon.types'

type CouponProps = {
	isCreated: boolean
	isAvailable: boolean
}

const CouponDetail = () => {
	const userSeq = localStorage.getItem('user')
	const { id: couponId } = useParams()
	console.log(userSeq)
	console.log(couponId)

	const [isCouponCreateAvailable] = useState(true)

	const coupon: CouponDataType = {
		couponId: 1,
		name: '테스트AA',
		code: 'AAA',
		type: 'FIXED',
		discount: 0,
		amount: 1,
		remainCouponNum: 1,
		createdAt: '2023-12-17T06:57:22.025Z',
	}
	const [couponStatus] = useState<CouponProps>({
		isCreated: false,
		isAvailable: false,
	})

	return (
		<CouponDetailContainer>
			<CouponDetailInfoContainer>
				<CouponDetailInfo>선택된 쿠폰 정보</CouponDetailInfo>
			</CouponDetailInfoContainer>
			<CouponCardContainer>
				<CouponCard coupon={coupon} />
			</CouponCardContainer>
			<CouponControlContainer>
				{couponStatus.isCreated ? (
					couponStatus.isAvailable ? (
						<CouponUseAvaliableButton />
					) : (
						<CouponUsedButton />
					)
				) : isCouponCreateAvailable ? (
					<CouponCreateButton />
				) : (
					<CouponCreateDisableButton />
				)}
			</CouponControlContainer>
		</CouponDetailContainer>
	)
}

export default withAuthCheck(CouponDetail)
