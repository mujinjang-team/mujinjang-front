import React, { useRef, useState } from 'react'
import {
	AdminCouponCreateButtonContainer,
	AdminCouponCreateContainer,
	AdminCouponCreateTitle,
	AdminCouponCreateContentWrapper,
	AdminCouponCreateContentTitle,
	AdminCouponCreateContentContainer,
	AdminCouponCreateContentItemWrapper,
	AdminCouponCreateContentItemTitle,
	AdminCouponCreateContentItem,
	StyledTextInput,
} from '@/components/admin/coupon/create/AdminCouponCreate.styles'
import Button from '@/components/common/Button'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { CouponDataType } from '@/types/Coupon.types'

type CouponTypeProps = Pick<CouponDataType, 'type'>

const AdminCouponCreate = () => {
	const nameRef = useRef<HTMLInputElement>()
	const codeRef = useRef<HTMLInputElement>()
	const discountRef = useRef<HTMLInputElement>()
	const amountRef = useRef<HTMLInputElement>()
	const [type, setType] = useState<CouponTypeProps>('FIXED' as unknown as CouponTypeProps)

	const onTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const selectedValue = event.target.value
		setType(selectedValue as unknown as CouponTypeProps)
	}

	return (
		<AdminCouponCreateContainer>
			<AdminCouponCreateTitle>쿠폰 발급</AdminCouponCreateTitle>
			<AdminCouponCreateContentWrapper>
				<AdminCouponCreateContentTitle>쿠폰 발급에 필요한 정보 입력</AdminCouponCreateContentTitle>
			</AdminCouponCreateContentWrapper>
			<AdminCouponCreateContentContainer>
				<AdminCouponCreateContentItemWrapper>
					<AdminCouponCreateContentItemTitle>쿠폰 코드</AdminCouponCreateContentItemTitle>
					<AdminCouponCreateContentItem>
						<StyledTextInput inputRef={codeRef} type="text" required />
					</AdminCouponCreateContentItem>
				</AdminCouponCreateContentItemWrapper>
				<AdminCouponCreateContentItemWrapper>
					<AdminCouponCreateContentItemTitle>쿠폰 이름</AdminCouponCreateContentItemTitle>
					<AdminCouponCreateContentItem>
						<StyledTextInput type="text" inputRef={nameRef} required />
					</AdminCouponCreateContentItem>
				</AdminCouponCreateContentItemWrapper>
				<AdminCouponCreateContentItemWrapper>
					<AdminCouponCreateContentItemTitle>쿠폰 타입</AdminCouponCreateContentItemTitle>
					<AdminCouponCreateContentItem>
						<RadioGroup value={type} onChange={onTypeChange} row name="coupon-type-radiogroup">
							<FormControlLabel value="FIXED" control={<Radio />} label="할인 금액" />
							<FormControlLabel value="PERCENTAGE" control={<Radio />} label="% (할인율)" />
						</RadioGroup>
					</AdminCouponCreateContentItem>
				</AdminCouponCreateContentItemWrapper>
				<AdminCouponCreateContentItemWrapper>
					<AdminCouponCreateContentItemTitle>쿠폰 할인 수치</AdminCouponCreateContentItemTitle>
					<AdminCouponCreateContentItem>
						<StyledTextInput type="number" inputRef={discountRef} required />
					</AdminCouponCreateContentItem>
				</AdminCouponCreateContentItemWrapper>
				<AdminCouponCreateContentItemWrapper>
					<AdminCouponCreateContentItemTitle>쿠폰 발급 수량</AdminCouponCreateContentItemTitle>
					<AdminCouponCreateContentItem>
						<StyledTextInput type="number" inputRef={amountRef} required />
					</AdminCouponCreateContentItem>
				</AdminCouponCreateContentItemWrapper>
			</AdminCouponCreateContentContainer>
			<AdminCouponCreateButtonContainer>
				<Button
					variant="black"
					onClick={() => {
						console.log('Clicked')
						console.log(codeRef.current?.value)
						console.log(nameRef.current?.value)
						console.log(discountRef.current?.value)
						console.log(amountRef.current?.value)
						console.log(type)
					}}
				>
					쿠폰 발급하기
				</Button>
			</AdminCouponCreateButtonContainer>
		</AdminCouponCreateContainer>
	)
}

export default AdminCouponCreate
