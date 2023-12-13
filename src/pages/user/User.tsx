import React, { useState } from 'react'
import { CouponControlContainer, UserContainer, UserInfo, UserInfoContainer } from '@/components/user/User.styles'
import { useParams } from 'react-router-dom'
import {
	CouponUseAvaliableButton,
	CouponUsedButton,
	CouponCreateButton,
	CouponCreateDisableButton,
} from '@/components/user/CouponButton'

type CouponProps = {
	isCreated: boolean
	isAvailable: boolean
}

const User = () => {
	const { id } = useParams()
	const [isCouponCreateAvailable] = useState(true)
	const [coupon] = useState<CouponProps>({
		isCreated: false,
		isAvailable: false,
	})

	return (
		<UserContainer>
			<UserInfoContainer>
				<UserInfo>선택된 User Seq : {id}</UserInfo>
			</UserInfoContainer>
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
		</UserContainer>
	)
}

export default User
