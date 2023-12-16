import React, { useRef } from 'react'
import {
	AdminCouponCreateButtonContainer,
	AdminCouponCreateContainer,
	AdminCouponCreateAmountGuideText,
	AdminCouponCreateAmountInput,
	AdminCreateAmountInputContainer,
} from '@/components/admin/coupon/create/AdminCouponCreate.styles'
import Button from '@/components/common/Button'

const AdminCouponCreate = () => {
	const inputRef = useRef<HTMLInputElement>()

	return (
		<AdminCouponCreateContainer>
			<AdminCreateAmountInputContainer>
				<AdminCouponCreateAmountGuideText>발급할 쿠폰의 수량 입력</AdminCouponCreateAmountGuideText>
				<AdminCouponCreateAmountInput inputRef={inputRef} defaultValue={0} />
			</AdminCreateAmountInputContainer>
			<AdminCouponCreateButtonContainer>
				<Button
					variant="black"
					onClick={() => {
						console.log('Clicked')
						console.log(inputRef.current?.value)
					}}
				>
					쿠폰 사용하기
				</Button>
			</AdminCouponCreateButtonContainer>
		</AdminCouponCreateContainer>
	)
}

export default AdminCouponCreate
