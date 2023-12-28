import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useAuthUserStore = defineStore('auth', () => {
  const user = useStorage('auth-user', {})
  const access_token = useStorage('access-token', '')

  const setUser = (data) => {
    user.value = data
  }

  const setAccessToken = (token) => {
    access_token.value = token
  }

  return { user, access_token, setUser, setAccessToken }
})
