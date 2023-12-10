import React from 'react'
import Button from '@/components/common/Button'
import { Link } from 'react-router-dom'
import { HomeContainer } from '@/components/user/home/Home.styles'

const Home = () => {
	return (
		<HomeContainer>
			<Link to="/user/1">
				<Button variant="blue">유저 - 쿠폰 사용</Button>
			</Link>
			<Link to="/admin/create">
				<Button variant="blue">어드민 - 쿠폰 발급</Button>
			</Link>
			<Link to="/admin/coupon/created">
				<Button variant="blue">어드민 - 쿠폰 발급 내역 확인</Button>
			</Link>
			<Link to="/admin/coupon/used">
				<Button variant="blue">어드민 - 쿠폰 사용 내역 확인</Button>
			</Link>
		</HomeContainer>
	)
}

export default Home
