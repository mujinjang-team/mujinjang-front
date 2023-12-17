import { handleError, responseData } from './common'
import { getBaseUrl } from './common'
import { Api } from './Api'

const api = new Api({ baseURL: getBaseUrl() + '/api' })

api.instance.interceptors.request.use(undefined, handleError)
api.instance.interceptors.response.use(responseData, handleError)

export default api
export * from './data-contracts'
