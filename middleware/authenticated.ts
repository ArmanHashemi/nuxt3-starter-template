import { useAuthStore } from '~/store/auth'

export default defineNuxtRouteMiddleware((to, from) => {
  const useStore = useAuthStore()
  if (!useStore.authenticated) {
    return navigateTo('/')
  }
})
