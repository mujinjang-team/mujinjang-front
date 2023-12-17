export type CouponDataType = {
	couponId: number
	name: string
	code: string
	type: 'FIXED' | 'PERCENTAGE'
	discount: number
	amount: number
	createdAt: string
}

export type CouponStatusType =
	| 'COUPON_CREATE_AVAILABLE'
	| 'COUPON_USE_AVAILABLE'
	| 'COUPON_CREATE_FINISHED'
	| 'COUPON_USE_COMPLETED'

export type CouponCardProps = {
	coupon: CouponDataType
}
