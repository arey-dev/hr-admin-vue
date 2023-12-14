import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)

  async function login(credentials) {
    try {
      const { data } = await axios.post('/auth/login', credentials)

      axios.defaults.headers.common['Authorization'] = `Bearer ${data.access_token}`

      user.value = data.user
    } catch (error) {
      if (error.response.status === 401) {
        return error.response.data.errors
      }
    }
  }

  return { user, login }
})
