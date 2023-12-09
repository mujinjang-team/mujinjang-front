function debounce<T>(callback: (params: T) => void, timeout = 250) {
	let timeoutId: number

	return (params: T) => {
		if (timeoutId) {
			window.clearTimeout(timeoutId)
		}

		timeoutId = window.setTimeout(() => {
			callback(params)
		}, timeout)
	}
}

export default debounce
