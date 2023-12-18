import React from 'react'
import {
	CouponCardContainer,
	CouponControlContainer,
	CouponDetailContainer,
	CouponDetailInfo,
	CouponDetailInfoContainer,
} from '@/components/coupon/CouponDetail.styles'
import { useNavigate, useParams } from 'react-router-dom'
import withAuthCheck from '@/containers/withAuthCheck'
import localStorage from '@/libs/localStorage'
import CouponCard from '@/components/coupon/CouponCard'
import { CouponDataType } from '@/types/Coupon.types'
import Button from '@/components/common/Button'
import LoadingView from '@/components/common/LoadingView'
import { useMutation, useQuery } from '@tanstack/react-query'
import api, { PostCouponWalletsIssueRequest } from '@/libs/api'

const CouponDetail = () => {
	const userSeq = localStorage.getItem('user')
	const { id: couponId } = useParams()
	const navigate = useNavigate()

	const { data, isLoading, isError, refetch } = useQuery({
		queryKey: ['coupon/getCouponId'],
		queryFn: async () => {
			return await api.getCouponsId(Number(couponId))
		},
	})

	const { data: couponRemainData, refetch: refetchCouponRemainData } = useQuery({
		queryKey: ['coupon/couponRemain'],
		queryFn: async () => {
			return await api.getCouponsCouponIdRemain(Number(couponId))
		},
	})

	const { data: couponIssuedData } = useQuery({
		queryKey: ['coupon/couponIssued'],
		queryFn: async () => {
			return await api.getUserCouponIssued(Number(userSeq), Number(couponId))
		},
	})

	const { data: couponUsedData } = useQuery({
		queryKey: ['coupon/couponUsed'],
		queryFn: async () => {
			return await api.getUserCouponUsed(Number(userSeq), Number(couponId))
		},
	})

	const { mutate: createCouponWalletMutate, isPending: isCreateCouponWalletPending } = useMutation({
		mutationKey: ['createCouponWallet'],
		mutationFn: async (payload: PostCouponWalletsIssueRequest) => {
			return await api.postCouponWalletsIssue(payload)
		},
		onSuccess: () => {
			refetch()
			refetchCouponRemainData()
		},
		onError: () => {
			alert('쿠폰 발급에 실패했습니다.')
		},
	})

	const { mutate: useCouponMutation, isPending: isUseCouponMutationPending } = useMutation({
		mutationKey: ['useCoupon'],
		mutationFn: async () => {
			return await api.patchCouponWalletsUse(Number(couponId))
		},
		onSuccess: () => {
			refetch()
			refetchCouponRemainData()
		},
		onError: () => {
			alert('쿠폰 발급에 실패했습니다.')
		},
	})

	if (isLoading) {
		return <LoadingView />
	}

	if (!data || isError) {
		alert('쿠폰 데이터 조회가 정상적으로 이루어지지 않습니다. 잠시 후 다시 시도해 주세요.')
		navigate('/coupon/list')

		return
	}

	const coupon: CouponDataType = data as CouponDataType

	return (
		<CouponDetailContainer>
			<CouponDetailInfoContainer>
				<CouponDetailInfo>선택된 쿠폰 정보</CouponDetailInfo>
			</CouponDetailInfoContainer>
			<CouponCardContainer>
				<CouponCard coupon={coupon} />
			</CouponCardContainer>
			<CouponControlContainer>
				{!couponRemainData ? (
					<Button variant="blue" disabled>
						선착순 쿠폰 발급이 종료되었습니다
					</Button>
				) : couponIssuedData ? (
					couponUsedData ? (
						<Button variant="blue" disabled>
							쿠폰이 사용되었습니다
						</Button>
					) : (
						<Button
							variant="blue"
							onClick={() => {
								useCouponMutation()
							}}
							isLoading={isUseCouponMutationPending}
						>
							쿠폰 사용하기
						</Button>
					)
				) : (
					<Button
						variant="blue"
						onClick={() => {
							createCouponWalletMutate({
								couponId: Number(couponId),
								userId: Number(userSeq),
							})
						}}
						isLoading={isCreateCouponWalletPending}
					>
						선착순 쿠폰 발급받기
					</Button>
				)}
			</CouponControlContainer>
		</CouponDetailContainer>
	)
}

export default withAuthCheck(CouponDetail)
