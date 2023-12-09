import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from '@/components/layout/MainLayout'
import AdminLayout from '@/components/layout/AdminLayout'
import User from '@/pages/user/User'
import Home from '@/pages/Home'
import CouponCreate from '@/pages/admin/Create'
import UsedDashboard from '@/pages/admin/UsedDashboard'
import CreateDashboard from '@/pages/admin/CreateDashboard'
import NotFound from '@/pages/NotFound'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<MainLayout />}>
					<Route path="/" element={<Home />} />
					<Route path="/user/:id" element={<User />} />
				</Route>
				<Route element={<AdminLayout />}>
					<Route path="/admin/dashboard/used" element={<UsedDashboard />} />
					<Route path="/admin/dashboard/create" element={<CreateDashboard />} />
					<Route path="/admin/create" element={<CouponCreate />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Router
