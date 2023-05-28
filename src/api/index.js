import { getRequest, postRequest } from '@/plugins/requestConfig'

export const getUser = (params) => {
  return getRequest('/user/list/page', params)
}

export const pushWechat = (params) => {
  return getRequest('/weChat/push', params)
}
