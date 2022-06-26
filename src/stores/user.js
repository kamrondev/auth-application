import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    user: []
  }),
  getters: {
    // something
  },
  actions: {
    // something
  }
})
