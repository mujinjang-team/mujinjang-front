import { AxiosError, AxiosResponse } from 'axios'

export function getBaseUrl() {
	return process.env.REACT_APP_API_DOMAIN
}

export function responseData(res: AxiosResponse) {
	return res.data
}

export function handleError(error: AxiosError) {
	if (!(error instanceof AxiosError)) {
		return Promise.reject(error)
	}

	const status = (error.response?.status || 'unknown') as ErrorStatus

	return Promise.reject(status)
}

type ErrorStatus = string
