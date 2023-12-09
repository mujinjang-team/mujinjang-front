import React from 'react'
import { LayoutRouteProps, Outlet } from 'react-router-dom'

const MainLayout = ({ children }: LayoutRouteProps) => {
	return <>{children || <Outlet />}</>
}

export default MainLayout
