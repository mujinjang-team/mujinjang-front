import React from 'react'
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

const AdminCouponCreate = () => {
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
						<StyledTextInput type="text" required />
					</AdminCouponCreateContentItem>
				</AdminCouponCreateContentItemWrapper>
				<AdminCouponCreateContentItemWrapper>
					<AdminCouponCreateContentItemTitle>쿠폰 이름</AdminCouponCreateContentItemTitle>
					<AdminCouponCreateContentItem>
						<StyledTextInput type="text" required />
					</AdminCouponCreateContentItem>
				</AdminCouponCreateContentItemWrapper>
				<AdminCouponCreateContentItemWrapper>
					<AdminCouponCreateContentItemTitle>쿠폰 타입</AdminCouponCreateContentItemTitle>
					<AdminCouponCreateContentItem>
						<StyledTextInput type="text" required />
					</AdminCouponCreateContentItem>
				</AdminCouponCreateContentItemWrapper>
				<AdminCouponCreateContentItemWrapper>
					<AdminCouponCreateContentItemTitle>쿠폰 할인 수치</AdminCouponCreateContentItemTitle>
					<AdminCouponCreateContentItem>
						<StyledTextInput type="number" required />
					</AdminCouponCreateContentItem>
				</AdminCouponCreateContentItemWrapper>
				<AdminCouponCreateContentItemWrapper>
					<AdminCouponCreateContentItemTitle>쿠폰 발급 수량</AdminCouponCreateContentItemTitle>
					<AdminCouponCreateContentItem>
						<StyledTextInput type="number" required />
					</AdminCouponCreateContentItem>
				</AdminCouponCreateContentItemWrapper>
			</AdminCouponCreateContentContainer>
			<AdminCouponCreateButtonContainer>
				<Button
					variant="black"
					onClick={() => {
						console.log('Clicked')
					}}
				>
					쿠폰 발급하기
				</Button>
			</AdminCouponCreateButtonContainer>
		</AdminCouponCreateContainer>
	)
}

export default AdminCouponCreate
