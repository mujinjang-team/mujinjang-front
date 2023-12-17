import React, { useRef } from 'react'
import Button from '@/components/common/Button'
import { Link } from 'react-router-dom'
import {
	AdminContainer,
	HomeContainer,
	SectionTitle,
	SectionWrapper,
	UserContainer,
	UserSeqInput,
} from '@/components/home/Home.styles'
import { getRandom } from '@/utils'

const Home = () => {
	const defaultUserSeq = getRandom(1, 10 * 1000 * 1000)
	const inputRef = useRef<HTMLInputElement>()

	return (
		<HomeContainer>
			<SectionWrapper>
				<SectionTitle>User</SectionTitle>
				<UserContainer>
					<UserSeqInput inputRef={inputRef} defaultValue={defaultUserSeq} />
					<Link to="/coupon/list">
						<Button variant="blue">선택된 User로 로그인</Button>
					</Link>
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
