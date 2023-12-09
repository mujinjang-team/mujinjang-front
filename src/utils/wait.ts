function wait(condition: (time: number) => boolean, timeout = 100) {
	let interval: number
	let count = 0

	return new Promise((resolve) => {
		interval = window.setInterval(() => {
			if (condition(++count * timeout)) {
				window.clearInterval(interval)
				resolve(void 0)
			}
		}, timeout)
	})
}

export default wait
