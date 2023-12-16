import React from 'react'
import Button from '@/components/common/Button'

export const CouponCreateButton = () => {
	return <Button variant="blue">선착순 쿠폰 발급받기</Button>
}

export const CouponUseAvaliableButton = () => {
	return <Button variant="blue">쿠폰 사용하기</Button>
}

export const CouponUsedButton = () => {
	return (
		<Button variant="blue" disabled>
			발급받은 쿠폰이 사용되었습니다
		</Button>
	)
}

export const CouponCreateDisableButton = () => {
	return (
		<Button variant="blue" disabled>
			선착순 쿠폰 발급이 종료되었습니다
		</Button>
	)
}
