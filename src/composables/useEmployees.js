import axios from 'axios'
import { ref, shallowRef } from 'vue'

export function useEmployees() {
  const employees = shallowRef(null)
  const employee = shallowRef(null)
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

  const getEmployee = async (id) => {
    isLoading.value = false
    isLoading.value = true

    const url = `/employees/${id}`

    const response = await axios.get(url)

    employee.value = response.data

    isLoading.value = false
  }

  const addEmployee = async (data) => {
    try {
      const url = 'emloyee/add'

      await axios.post(url, data)
    } catch (error) {
      if (error.response.status === 422) {
        errors.value = error.response.data
      }
    }
  }

  return {
    employees,
    employee,
    errors,
    isLoading,
    pageInfo,
    getEmployees,
    getEmployee,
    addEmployee
  }
}
