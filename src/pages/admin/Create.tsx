import React from 'react'
import {
	CouponCreateButtonContainer,
	CouponCreateContainer,
	CreateAmountGuideText,
	CreateAmountInput,
	CreateAmountInputContainer,
} from '@/components/admin/create/AdminCreate.styles'
import Button from '@/components/common/Button'

const CouponCreate = () => {
	return (
		<CouponCreateContainer>
			<CreateAmountInputContainer>
				<CreateAmountGuideText>발급할 쿠폰의 수량 입력</CreateAmountGuideText>
				<CreateAmountInput />
			</CreateAmountInputContainer>
			<CouponCreateButtonContainer>
				<Button
					variant="black"
					onClick={() => {
						console.log('Clicked')
					}}
				>
					쿠폰 사용하기
				</Button>
			</CouponCreateButtonContainer>
		</CouponCreateContainer>
	)
}

export default CouponCreate
