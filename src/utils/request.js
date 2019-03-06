import axios from 'axios'

// 创建一个 axios 实例
const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 30000 // 请求超时时间
})

// 请求拦截器
service.interceptors.request.use(config => {
  // 在请求发送之前做一些处理
  if (!(/^https:\/\/|http:\/\//.test(config.url))) {
    const token = store.getters.token
    if (token && token !== 'undefined') {
      // config.headers['Authorization'] = getToken() // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
      config.headers['token'] = getToken()
    }
    if (config.method === 'get') {
      if (typeof config.params === 'string' || config.params === undefined) {
        config.params = {}
      }
      config.params['t'] = new Date().getTime()
    }
  }
  return config
}, error => {
  // 发送失败
  console.log(error)
  Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(
  response => {
    // dataAxios 是 axios 返回数据中的 data
    const dataAxios = response.data
    // 这个状态码是和后端约定的
    const { status } = dataAxios
    // 根据 status 进行判断
    if (status === undefined) {
      return Promise.reject('error')
    } else {
      // 有 status 代表这是一个后端接口 可以进行进一步的判断
      switch (status) {
        case 200:
          return dataAxios
        case 40301:
          alert('token失效')
          return Promise.reject(dataAxios)
        default:
          // 不是正确的 code
          alert('接口返回 status != 200')
          return Promise.reject(dataAxios)
      }
    }
  },
  error => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400: error.message = '请求错误'; break
        case 401: error.message = '未授权，请登录'; break
        case 403: error.message = '拒绝访问'; break
        case 404: error.message = `请求地址出错: ${error.response.config.url}`; break
        case 408: error.message = '请求超时'; break
        case 500: error.message = '服务器内部错误'; break
        case 501: error.message = '服务未实现'; break
        case 502: error.message = '网关错误'; break
        case 503: error.message = '服务不可用'; break
        case 504: error.message = '网关超时'; break
        case 505: error.message = 'HTTP版本不受支持'; break
        default: break
      }
    }
    errorLog(error)
    return Promise.reject(error)
  }
)

export default service
