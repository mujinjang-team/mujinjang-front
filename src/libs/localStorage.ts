export type LocalStorageMap = {
	/**
	 * @description 캘린더 직원 선택 상태를 유지하기 위해 사용
	 */
	user?: number
}

type LocalStorageItemKeys = keyof LocalStorageMap

const localStorage = {
	getItem: <Key extends LocalStorageItemKeys>(key: Key) => {
		if (typeof window == 'undefined') return null

		const item = window.localStorage.getItem(key)

		return item ? (JSON.parse(item) as LocalStorageMap[Key]) : null
	},
	setItem: <Key extends LocalStorageItemKeys>(key: Key, value: LocalStorageMap[Key]) => {
		window.localStorage.setItem(key, JSON.stringify(value))
	},
	removeItem: <Key extends LocalStorageItemKeys>(key: Key) => {
		window.localStorage.removeItem(key)
	},
	clear: () => {
		window.localStorage.clear()
	},
}

export default localStorage
