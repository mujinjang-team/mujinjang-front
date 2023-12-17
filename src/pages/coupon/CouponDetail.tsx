import React, { useState } from 'react'
import {
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

type CouponProps = {
	isCreated: boolean
	isAvailable: boolean
}

const CouponDetail = () => {
	const { id } = useParams()
	const [isCouponCreateAvailable] = useState(true)
	const [coupon] = useState<CouponProps>({
		isCreated: false,
		isAvailable: false,
	})

	return (
		<CouponDetailContainer>
			<CouponDetailInfoContainer>
				<CouponDetailInfo>선택된 User Seq : {id}</CouponDetailInfo>
			</CouponDetailInfoContainer>
			<CouponControlContainer>
				{coupon.isCreated ? (
					coupon.isAvailable ? (
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
