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
import { useMutation } from '@tanstack/react-query'
import api, { PostCouponsRequest } from '@/libs/api'
import { useNavigate } from 'react-router-dom'

type CouponTypeProps = Pick<CouponDataType, 'type'>

const AdminCouponCreate = () => {
	const navigate = useNavigate()

	const nameRef = useRef<HTMLInputElement>()
	const codeRef = useRef<HTMLInputElement>()
	const discountRef = useRef<HTMLInputElement>()
	const amountRef = useRef<HTMLInputElement>()
	const [type, setType] = useState<CouponTypeProps>('FIXED' as unknown as CouponTypeProps)

	const onTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const selectedValue = event.target.value
		setType(selectedValue as unknown as CouponTypeProps)
	}

	const { mutate, isPending } = useMutation({
		mutationKey: ['createCoupon'],
		mutationFn: async (payload: PostCouponsRequest) => {
			return await api.postCoupons(payload)
		},
		onSuccess: () => {
			alert('쿠폰 발급이 완료되었습니다')
			navigate('/admin/coupon/list')
		},
	})

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
					isLoading={isPending}
					onClick={async () => {
						const name = nameRef.current?.value
						const code = codeRef.current?.value
						const discount = discountRef.current?.value
						const amount = amountRef.current?.value

						if (!name || !name.trim() || !code || !code.trim() || !discount || !amount) {
							alert('모든 입력값을 필수로 입력해야 합니다.')
							return
						}

						mutate({
							name: name,
							code: code,
							type: type as unknown as string,
							discount: Number(discount),
							amount: Number(discount),
						})
					}}
				>
					쿠폰 발급하기
				</Button>
			</AdminCouponCreateButtonContainer>
		</AdminCouponCreateContainer>
	)
}

export default AdminCouponCreate
