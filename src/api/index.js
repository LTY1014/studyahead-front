import { getRequest, postRequest } from '@/plugins/requestConfig'

export const getUser = (params) => {
  return getRequest('/user/list/page', params)
}

export const getShopList = (params) => {
  return getRequest('/shopDetail/list', params)
}

export const getShop = (id,params) => {
  return getRequest(`/shopDetail/get/${id}`, params)
}

export const pushWechat=(params)=>{
  return getRequest('/weChat/push',params)
}
