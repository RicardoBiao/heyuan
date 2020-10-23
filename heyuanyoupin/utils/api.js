import Fly from 'flyio/dist/npm/wx'
import qs from 'qs'
import request from './request' // 用于请求需带token的请求

// 用于请求不需要带token请求
const newRequest = new Fly()
newRequest.config.baseURL = request.config.baseURL
newRequest.config.headers = request.config.headers

const api = {
	
}

export default api