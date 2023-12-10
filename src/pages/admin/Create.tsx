import React, { useRef } from 'react'
import {
	CouponCreateButtonContainer,
	CouponCreateContainer,
	CreateAmountGuideText,
	CreateAmountInput,
	CreateAmountInputContainer,
} from '@/components/admin/create/AdminCreate.styles'
import Button from '@/components/common/Button'

const CouponCreate = () => {
	const inputRef = useRef<HTMLInputElement>()

	return (
		<CouponCreateContainer>
			<CreateAmountInputContainer>
				<CreateAmountGuideText>발급할 쿠폰의 수량 입력</CreateAmountGuideText>
				<CreateAmountInput inputRef={inputRef} defaultValue={0} />
			</CreateAmountInputContainer>
			<CouponCreateButtonContainer>
				<Button
					variant="black"
					onClick={() => {
						console.log('Clicked')
						console.log(inputRef.current?.value)
					}}
				>
					쿠폰 사용하기
				</Button>
			</CouponCreateButtonContainer>
		</CouponCreateContainer>
	)
}

export default CouponCreate
