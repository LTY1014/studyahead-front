import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'userStore',
  state: () => {
    return {
      username: 'admin',
      phone: '13812345678',
      status: true,
      money: 18.88,
      avatarUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
    }
  },
})
