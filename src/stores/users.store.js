import { defineStore } from 'pinia'
import { auth } from '../firebase'

export const useUsersStore = defineStore({
  id: 'users',
  state: () => ({
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    isAuthenticated: localStorage.getItem('user') ? true : false,
  }),
  getters: {
    // something
  },
  actions: {
    // something
  }
})
