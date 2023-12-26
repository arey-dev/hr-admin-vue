import axios from 'axios'
import { ref } from 'vue'

export function useEmployees() {
  const employees = ref(null)
  const pageInfo = ref(null)
  const errors = ref(null)
  const isLoading = ref(false)

  const getEmployees = async () => {
    isLoading.value = true

    const response = await axios.get('/employees')

    // seperate data that contains employee info
    // and data thaat contains page info
    const { data, ...rest } = response.data.data

    employees.value = data
    pageInfo.value = rest

    isLoading.value = false
  }

  const getPage = async (page) => {
    isLoading.value = true
    const response = await axios.get(`/employees?page=${page}`)

    // seperate data that contains employee info
    // and data thaat contains page info
    const { data, ...rest } = response.data.data

    employees.value = data
    pageInfo.value = rest

    isLoading.value = false
  }

  return { employees, errors, isLoading, pageInfo, getEmployees, getPage }
}
