import React from 'react'
import { LayoutRouteProps, Outlet } from 'react-router-dom'

const AdminLayout = ({ children }: LayoutRouteProps) => {
	return <>{children || <Outlet />}</>
}

export default AdminLayout
