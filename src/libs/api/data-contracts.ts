export type GetUserCouponUsedResponse = {
	isUsed: boolean
}

export type GetUserCouponIssuedResponse = {
	isIssued: boolean
}

export type PostCouponWalletsIssueRequest = {
	userId: number
	couponId: number
}

export type PostCouponWalletsIssueResponse = {
	couponWalletId: number
}

export type PatchCouponWalletsUseResponse = undefined

export type GetCouponWalletsResponse = {
	content: [
		{
			userId: number
			username: string
			couponIssuedAt: string
			couponUsedAt: string
		},
	]
} & CommonPageableResponse

export type GetCouponsResponse = {
	content: [
		{
			couponId: number
			name: string
			code: string
			type: string
			discount: number
			amount: number
			remainCouponNum: number
			createdAt: string
		},
	]
} & CommonPageableResponse

export type PostCouponsRequest = {
	code: string
	name: string
	type: string
	discount: number
	amount: number
}

export type PostCouponsResponse = {
	couponId: number
}

export type GetCouponsIdResponse = {
	couponId: number
	name: string
	code: string
	type: string
	discount: number
	amount: number
	remainCouponNum: number
	createdAt: string
}

export type GetCouponsCouponIdRemainResponse = {
	isRemained: boolean
}

export type CommonPageableResponse = {
	totalPages: number
	totalElements: number
	size: number
	number: number
	sort: {
		empty: boolean
		unsorted: boolean
		sorted: boolean
	}
	numberOfElements: number
	pageable: {
		offset: number
		sort: {
			empty: boolean
			unsorted: boolean
			sorted: boolean
		}
		paged: boolean
		unpaged: boolean
		pageNumber: number
		pageSize: number
	}
	last: boolean
	first: boolean
	empty: boolean
}
