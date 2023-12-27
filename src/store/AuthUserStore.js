import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthUserStore = defineStore('auth', () => {
  const user = ref(null)

  function setUser(data) {
    user.value = data
  }

  return { user, setUser }
})
