import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authenticated: true
  }),
  actions: {
    login () {
      this.authenticated = false
    }
  },
  persist: true
})
