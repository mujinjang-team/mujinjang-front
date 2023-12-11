import {
	CreatedDashboardContainer,
	CreatedDashboardHeaderContainer,
	CreatedDashboardContentContainer,
	CreatedDashboardHeaderTitle,
	CreatedDashboardHeaderSubTitle,
	CreatedDashboardHeaderContent,
	CreatedDashboardHeaderContentRow,
} from '@/components/admin/created-dashboard/CreatedDashboard.styles'
import React from 'react'

const CreatedDashboard = () => {
	return (
		<CreatedDashboardContainer>
			<CreatedDashboardHeaderContainer>
				<CreatedDashboardHeaderTitle>쿠폰 생성 현황</CreatedDashboardHeaderTitle>
				<CreatedDashboardHeaderContentRow>
					<CreatedDashboardHeaderSubTitle>발급 건수</CreatedDashboardHeaderSubTitle>
					<CreatedDashboardHeaderContent>1000건</CreatedDashboardHeaderContent>
				</CreatedDashboardHeaderContentRow>
				<CreatedDashboardHeaderContentRow>
					<CreatedDashboardHeaderSubTitle>선착순 사용 가능 갯수</CreatedDashboardHeaderSubTitle>
					<CreatedDashboardHeaderContent>100건</CreatedDashboardHeaderContent>
				</CreatedDashboardHeaderContentRow>
			</CreatedDashboardHeaderContainer>
			<CreatedDashboardContentContainer></CreatedDashboardContentContainer>
		</CreatedDashboardContainer>
	)
}

export default CreatedDashboard
