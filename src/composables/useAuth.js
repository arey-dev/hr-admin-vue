import axios from 'axios'
import { ref, shallowRef } from 'vue'
import { useAuthUserStore } from '../store/AuthUserStore'

export function useAuth() {
  const store = useAuthUserStore()
  const isLoading = ref(false)
  const errors = shallowRef(null)

  async function login(credentials) {
    isLoading.value = true

    try {
      const { data } = await axios.post('/auth/login', credentials)

      axios.defaults.headers.common['Authorization'] = `Bearer ${data.access_token}`

      store.setUser(data.user)
      store.setAccessToken(data.access_token)
    } catch (error) {
      if (error.response.status === 401) {
        errors.value = error.response.data.errors
      }
    } finally {
      isLoading.value = false
    }
  }

  return { isLoading, errors, login }
}
