import React, { useRef } from 'react'
import Button from '@/components/common/Button'
import { Link, useNavigate } from 'react-router-dom'
import {
	AdminContainer,
	HomeContainer,
	SectionTitle,
	SectionWrapper,
	UserContainer,
	UserSeqInput,
} from '@/components/home/Home.styles'
import { getRandom } from '@/utils'
import localStorage from '@/libs/localStorage'

const Home = () => {
	const defaultUserSeq = getRandom(1, 10 * 1000 * 1000)
	const inputRef = useRef<HTMLInputElement>()
	const navigate = useNavigate()

	const redirectWithUserSeq = () => {
		const value = Number(inputRef.current?.value)
		console.log(value)
		if (!value || value < 1 || value > 10 * 1000 * 1000) {
			alert('올바른 형식의 User ID를 입력해주세요')
			return
		}

		localStorage.setItem('user', value)
		navigate('/coupon/list')
	}

	return (
		<HomeContainer>
			<SectionWrapper>
				<SectionTitle>User</SectionTitle>
				<UserContainer>
					<UserSeqInput inputRef={inputRef} defaultValue={defaultUserSeq} />
					<Button variant="blue" onClick={redirectWithUserSeq}>
						선택된 User로 로그인
					</Button>
				</UserContainer>
			</SectionWrapper>

			<SectionWrapper>
				<SectionTitle>Admin</SectionTitle>
				<AdminContainer>
					<Link to="/admin/coupon/list">
						<Button variant="black">어드민 - 쿠폰 내역</Button>
					</Link>
					<Link to="/admin/coupon/create">
						<Button variant="black">어드민 - 쿠폰 생성</Button>
					</Link>
				</AdminContainer>
			</SectionWrapper>
		</HomeContainer>
	)
}

export default Home
