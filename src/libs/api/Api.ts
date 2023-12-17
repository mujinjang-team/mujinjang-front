import {
	GetCouponWalletsResponse,
	GetCouponsCouponIdRemainResponse,
	GetCouponsIdResponse,
	GetCouponsResponse,
	GetUserCouponIssuedResponse,
	GetUserCouponUsedResponse,
	PatchCouponWalletsUseResponse,
	PostCouponWalletsIssueRequest,
	PostCouponWalletsIssueResponse,
	PostCouponsRequest,
	PostCouponsResponse,
} from './data-contracts'
import { HttpClient, RequestParams } from './http-client'

export class Api<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
	/**
	 * @description 쿠폰 사용 여부 조회 API
	 * @tags 쿠폰 사용 여부 조회 API
	 * @name GetUserCouponUsed
	 * @summary 쿠폰 사용 여부 조회 API
	 * @secure
	 */
	getUserCouponUsed = (userId: number, couponId: number, params: RequestParams = {}) =>
		this.request<GetUserCouponUsedResponse, any>({
			path: `/users/${userId}/coupons/${couponId}/used`,
			method: 'GET',
			secure: true,
			...params,
		})

	/**
	 * @description 쿠폰 발급 여부 조회 API
	 * @tags 쿠폰 발급 여부 조회 API
	 * @name GetUserCouponIssued
	 * @summary 쿠폰 발급 여부 조회 API
	 * @secure
	 */
	getUserCouponIssued = (userId: number, couponId: number, params: RequestParams = {}) =>
		this.request<GetUserCouponIssuedResponse, any>({
			path: `/users/${userId}/coupons/${couponId}/issued`,
			method: 'GET',
			secure: true,
			...params,
		})

	/**
	 * @description 쿠폰 발급 API
	 * @tags 쿠폰 발급 API
	 * @name PostCouponWalletsIssue
	 * @summary 쿠폰 발급 API
	 * @secure
	 */
	postCouponWalletsIssue = (data: PostCouponWalletsIssueRequest, params: RequestParams = {}) =>
		this.request<PostCouponWalletsIssueResponse, any>({
			path: `/coupon-wallets/issue`,
			method: 'POST',
			body: data,
			secure: true,
			...params,
		})

	/**
	 * @description 쿠폰 사용 API
	 * @tags 쿠폰 사용 API
	 * @name PatchCouponWalletsUse
	 * @summary 쿠폰 사용 API
	 * @secure
	 */
	patchCouponWalletsUse = (id: number, params: RequestParams = {}) =>
		this.request<PatchCouponWalletsUseResponse, any>({
			path: `/coupon-wallets/${id}/use`,
			method: 'PATCH',
			secure: true,
			...params,
		})

	/**
	 * @description 쿠폰 사용 현황 API
	 * @tags 쿠폰 사용 현황 API
	 * @name GetCouponWallets
	 * @summary 쿠폰 사용 현황 API
	 * @secure
	 */
	getCouponWallets = (couponId: number, page?: number, size?: number, params: RequestParams = {}) =>
		this.request<GetCouponWalletsResponse, any>({
			path: `/coupon-wallets/${couponId}`,
			method: 'GET',
			secure: true,
			...params,
		})

	/**
	 * @description 쿠폰 리스트 조회 API
	 * @tags 쿠폰 리스트 조회 API
	 * @name GetCoupons
	 * @summary 쿠폰 리스트 조회 API
	 * @secure
	 */
	getCoupons = (page?: number, size?: number, params: RequestParams = {}) =>
		this.request<GetCouponsResponse, any>({
			path: `/coupons`,
			method: 'GET',
			secure: true,
			...params,
		})

	/**
	 * @description 쿠폰 생성 API
	 * @tags 쿠폰 생성 API
	 * @name PostCoupons
	 * @summary 쿠폰 생성 API
	 * @secure
	 */
	postCoupons = (data: PostCouponsRequest, params: RequestParams = {}) =>
		this.request<PostCouponsResponse, any>({
			path: `/coupons`,
			method: 'POST',
			body: data,
			secure: true,
			...params,
		})

	/**
	 * @description 쿠폰 조회 API
	 * @tags 쿠폰 조회 API
	 * @name GetCouponsId
	 * @summary 쿠폰 조회 API
	 * @secure
	 */
	getCouponsId = (id: number, params: RequestParams = {}) =>
		this.request<GetCouponsIdResponse, any>({
			path: `/coupons/${id}`,
			method: 'GET',
			secure: true,
			...params,
		})

	/**
	 * @description 쿠폰 발급 가능 여부 조회 API
	 * @tags 쿠폰 발급 가능 여부 조회 API
	 * @name GetCouponsCouponIdRemain
	 * @summary 쿠폰 발급 가능 여부 조회 API
	 * @secure
	 */
	getCouponsCouponIdRemain = (couponId: number, params: RequestParams = {}) =>
		this.request<GetCouponsCouponIdRemainResponse, any>({
			path: `/coupons/${couponId}/remain`,
			method: 'GET',
			secure: true,
			...params,
		})
}
