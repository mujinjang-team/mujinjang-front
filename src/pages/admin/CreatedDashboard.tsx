import {
	CreatedDashboardContainer,
	CreatedDashboardHeaderContainer,
	CreatedDashboardContentContainer,
	CreatedDashboardHeader,
} from '@/components/admin/created-dashboard/CreatedDashboard.styles'
import React from 'react'

const CreatedDashboard = () => {
	return (
		<CreatedDashboardContainer>
			<CreatedDashboardHeaderContainer>
				<CreatedDashboardHeader>쿠폰 생성 현황</CreatedDashboardHeader>
			</CreatedDashboardHeaderContainer>
			<CreatedDashboardContentContainer></CreatedDashboardContentContainer>
		</CreatedDashboardContainer>
	)
}

export default CreatedDashboard
