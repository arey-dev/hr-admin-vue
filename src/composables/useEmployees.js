import axios from 'axios'
import { ref, onMounted } from 'vue'

export function useEmployees() {
  const employees = ref(null)
  const pageInfo = ref(null)
  const errors = ref(null)
  const isLoading = ref(false)

  const getEmployees = async (queryString, page = 1) => {
    isLoading.value = true

    const url = `/employees?${queryString ?? ''}&page=${page}`

    const response = await axios.get(url)

    // seperate data that contains employee info
    // and data that contains page info
    const { data, ...rest } = response.data

    employees.value = data

    // pagination info are stored here,
    // currentPage, last page link, first page link, etc.
    pageInfo.value = rest

    isLoading.value = false
  }

  return { employees, errors, isLoading, pageInfo, getEmployees }
}
