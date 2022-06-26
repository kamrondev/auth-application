import { defineStore } from 'pinia'

export const useUsersStore = defineStore({
  id: 'users',
  state: () => ({
    user: {}
  }),
  getters: {
    // something
  },
  actions: {
    // something
  }
})
