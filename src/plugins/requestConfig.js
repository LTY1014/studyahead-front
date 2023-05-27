import axios from 'axios'

const instance = axios.create({
  // TODO 部署修改线上地址
  baseURL: 'http://localhost:8092/api',
  timeout: 10000,
  headers: {},
})

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 前端发送请求成功
    const res = response.data

    //根据返回的code值来做不同处理
    if (res.code !== 0) {
      // 请求失败，返回错误信息
      console.error('request error', res.message)
      return res.message
    }
    return res
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    return Promise.reject(error)
  },
)

/**
 * get请求
 * @param url 请求地址
 * @param params 请求参数
 */
export function getRequest(url, params) {
  return instance({
    method: 'GET',
    url: `${url}`,
    params: params,
  })
}

/**
 * post请求
 * @param url 请求地址
 * @param data 请求数据
 * @returns {Promise}
 */
export function postRequest(url, params) {
  return instance({
    method: 'POST',
    url: `${url}`,
    params: params,
  })
}

export default instance
