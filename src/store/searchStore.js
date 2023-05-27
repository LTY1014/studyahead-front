import { defineStore } from 'pinia'

export const useSearchStore = defineStore({
  id: 'searchStore',
  state: () => {
    return {
      searchHistory: ['A店铺','B店铺'],
    }
  },
})
