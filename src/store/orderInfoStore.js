import { defineStore } from 'pinia'

export const useOrderInfoStore = defineStore({
  id: 'orderInfoStore',
  state: () => {
    return {
      shopId:'',
      shopName:'',
    }
  },
})
