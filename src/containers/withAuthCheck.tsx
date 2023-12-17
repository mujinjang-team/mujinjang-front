import React, { useEffect } from 'react'
import localStorage from '@/libs/localStorage'
import { useNavigate } from 'react-router'
import { USER_MAX_VALUE, USER_MIN_VALUE } from '@/constants'

function withAuthCheck<Props extends Record<string, any>>(Component: React.FunctionComponent<Props>) {
	const WithAuthCheck = React.forwardRef((props: Parameters<typeof Component>[0], ref: React.ForwardedRef<any>) => {
		const navigate = useNavigate()

		function checkAuthState() {
			const user = localStorage.getItem('user')
			const userNumber = Number(user)

			if (!user || userNumber < USER_MIN_VALUE || userNumber > USER_MAX_VALUE) {
				return false
			}

			return true
		}

		useEffect(() => {
			if (!checkAuthState()) {
				navigate('/')
			}
		}, [])

		return <Component {...props} ref={ref} />
	})

	WithAuthCheck.displayName = 'WithAuthCheck'

	return WithAuthCheck
}

export default withAuthCheck
