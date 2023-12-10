import Button from '@/components/common/Button'
import { CouponControlContainer, UserContainer, UserInfo, UserInfoContainer } from '@/components/user/User.styles'
import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
	const { id } = useParams()
	return (
		<UserContainer>
			<UserInfoContainer>
				<UserInfo>선택된 User Seq : {id}</UserInfo>
			</UserInfoContainer>
			<CouponControlContainer>
				<Button
					variant="black"
					onClick={() => {
						console.log('Clicked')
					}}
				>
					쿠폰 사용하기
				</Button>
			</CouponControlContainer>
		</UserContainer>
	)
}

export default User
