import axios, { type AxiosError, type InternalAxiosRequestConfig, type AxiosResponse } from 'axios'

interface ApiResponse<T = unknown> {
  code: number
  data: T
  message?: string
}

const isWrappedResponse = (data: unknown): data is ApiResponse => {
  return typeof data === 'object' && data !== null && 'code' in data && 'data' in data
}

const request = axios.create({
  baseURL: import.meta.env.VITE_PUBLIC_API_BASE_URL + import.meta.env.VITE_PUBLIC_API_PREFIX,
  timeout: 15000,
})

const userRequest = request.create({
  baseURL: 'https://reqres.in' + '/api',
  timeout: 15000,
})

request.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error: AxiosError) => Promise.reject(error)
)

request.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data

    // 标准业务包装：{ code, data, message }
    if (isWrappedResponse(res)) {
      if (res.code === 200) {
        return res.data
      }

      console.error(`[API Error]: ${res.message || '未知错误'}`)
      return Promise.reject(new Error(res.message || '请求失败'))
    }

    // 第三方直连 API（如 jsonplaceholder）原样返回
    return res
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      console.warn('Token 已过期，请重新登录')
    }
    return Promise.reject(error)
  }
)

userRequest.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error: AxiosError) => Promise.reject(error)
)

userRequest.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data

    // 标准业务包装：{ code, data, message }
    if (isWrappedResponse(res)) {
      if (res.code === 200) {
        return res.data
      }

      console.error(`[API Error]: ${res.message || '未知错误'}`)
      return Promise.reject(new Error(res.message || '请求失败'))
    }

    // 第三方直连 API（如 jsonplaceholder）原样返回
    return res
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      console.warn('Token 已过期，请重新登录')
    }
    return Promise.reject(error)
  }
)

export { request, userRequest }
