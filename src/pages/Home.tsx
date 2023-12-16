import React from 'react'
import Button from '@/components/common/Button'
import { Link } from 'react-router-dom'
import { HomeContainer } from '@/components/home/Home.styles'

const Home = () => {
	return (
		<HomeContainer>
			<Link to="/coupon/list">
				<Button variant="blue">유저 - 쿠폰 사용</Button>
			</Link>
			<Link to="/admin/coupon/list">
				<Button variant="blue">어드민 - 쿠폰 내역</Button>
			</Link>
			<Link to="/admin/coupon/create">
				<Button variant="blue">어드민 - 쿠폰 생성</Button>
			</Link>
		</HomeContainer>
	)
}

export default Home
