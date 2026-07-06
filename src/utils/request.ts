import axios, { type AxiosError, type InternalAxiosRequestConfig, type AxiosResponse } from 'axios'

// 1. 创建 axios 实例
const request = axios.create({
  baseURL: import.meta.env.VITE_PUBLIC_API_BASE_URL + import.meta.env.VITE_PUBLIC_API_PREFIX, // 从环境变量读取基础路径
  timeout: 15000, // 默认超时时间 15秒
})

// 2. 请求拦截器
request.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 每次发请求前，自动从本地获取 Token 并塞入请求头
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error: AxiosError) => {
    // 请求发送失败（如网络断开）
    return Promise.reject(error)
  }
)

// 3. 响应拦截器
request.interceptors.response.use(
  (response: AxiosResponse) => {
    // 假设后端返回的数据格式为: { code: 200, data: {...}, message: 'success' }
    // 我们在这里直接把 data 剥离出来，以后业务代码里直接拿到的就是 data
    const res = response.data
    if (res.code === 200) {
      return res.data
    }

    // 如果业务状态码不是 200（如 token 过期、无权限等）
    // 可以在这里统一做弹窗提示或强制跳转登录页
    console.error(`[API Error]: ${res.message || '未知错误'}`)
    return Promise.reject(new Error(res.message || '请求失败'))
  },
  (error: AxiosError) => {
    // 处理 HTTP 状态码错误（如 401, 404, 500）
    if (error.response?.status === 401) {
      console.warn('Token 已过期，请重新登录')
      // TODO: 这里以后可以接入路由跳转登录页，并清除本地 token
    }
    return Promise.reject(error)
  }
)

export default request
