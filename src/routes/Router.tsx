import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from '@/components/layout/MainLayout'
import AdminLayout from '@/components/layout/AdminLayout'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'
import CouponList from '@/pages/coupon/CouponList'
import CouponDetail from '@/pages/coupon/CouponDetail'
import AdminCouponList from '@/pages/admin/AdminCouponList'
import AdminCouponCreate from '@/pages/admin/AdminCouponCreate'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<MainLayout />}>
					<Route path="/" element={<Home />} />
					<Route path="/coupon/list" element={<CouponList />} />
					<Route path="/coupon/detail/:id" element={<CouponDetail />} />
				</Route>
				<Route element={<AdminLayout />}>
					<Route path="/admin/coupon/list" element={<AdminCouponList />} />
					<Route path="/admin/coupon/create" element={<AdminCouponCreate />} />
				</Route>
				<Route element={<MainLayout />}>
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default Router
