import axios from 'axios'
import { ref } from 'vue'

export function useEmployees() {
  const employees = ref(null)
  const pageInfo = ref(null)
  const errors = ref(null)
  const isLoading = ref(false)

  const getEmployees = async (query, page = 1) => {
    isLoading.value = true

    const url = query ? `/employees?q=${query}&page=${page}` : `/employees?&page=${page}`

    const response = await axios.get(url)

    // seperate data that contains employee info
    // and data thaat contains page info
    const { data, ...rest } = response.data

    employees.value = data

    pageInfo.value = rest

    isLoading.value = false
  }

  return { employees, errors, isLoading, pageInfo, getEmployees }
}
