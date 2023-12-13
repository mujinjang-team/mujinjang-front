import { NotFoundSubTitleWrapper, NotFoundTitleWrapper, NotFoundWrapper } from '@/components/not-found/NotFound.styles'
import React from 'react'

const NotFound = () => {
	return (
		<NotFoundWrapper>
			<NotFoundTitleWrapper>
				<span>4</span>
				<span>🤔</span>
				<span>4</span>
			</NotFoundTitleWrapper>
			<NotFoundSubTitleWrapper>요청하신 페이지를 찾을 수 없습니다</NotFoundSubTitleWrapper>
		</NotFoundWrapper>
	)
}

export default NotFound
