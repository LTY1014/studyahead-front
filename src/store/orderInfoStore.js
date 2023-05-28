import { defineStore } from 'pinia'
import { getDay, getMonth } from '@/plugins/util'

export const useOrderInfoStore = defineStore({
  id: 'orderInfoStore',
  state: () => {
    return {
      orderInfo: {
        orderDate: '',
        startTime: '08:00',
        endTime: '10:00',
        place: '410',
        userId: '1',
        appointmentContent: '',
      },
    }
  },
  actions: {
    initDate() {
      this.orderInfo.orderDate = getMonth() + '月' + getDay() + '日'
    },
  },
})
