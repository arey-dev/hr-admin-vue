import axios from 'axios'
import { ref } from 'vue'

export function useEmployees() {
  const employees = ref(null)
  const errors = ref(null)

  const getEmployees = async () => {
    const response = await axios.get('/employees')

    employees.value = response.data.data
  }

  return { employees, errors, getEmployees }
}
