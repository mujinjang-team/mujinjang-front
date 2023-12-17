import React from 'react'
import { LoadingViewGuideText, LoadingViewIconWrapper, LoadingViewWrapper } from './LoadingView.styles'
import Spinner from '@/assets/icons/icon-spinner.svg'

const LoadingView = () => {
	return (
		<LoadingViewWrapper>
			<LoadingViewIconWrapper>
				<img src={Spinner} alt="Loading ..." />
			</LoadingViewIconWrapper>
			<LoadingViewGuideText>페이지를 불러오는 중입니다</LoadingViewGuideText>
		</LoadingViewWrapper>
	)
}

export default LoadingView
