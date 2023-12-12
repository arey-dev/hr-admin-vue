import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const isAuthenticated = ref(false)

  async function login(credentials) {
    try {
      const { data } = await axios.post('/login', credentials, {
        withCredentials: true
      })

      axios.defaults.headers.common['Authorization'] = `Bearer ${data.access_token}`

      user.value = data.user

      isAuthenticated.value = true
    } catch (error) {
      if (error.response.status == 401) {
        return error.response.data.errors
      }
    }
  }

  return { user, isAuthenticated, login }
})
