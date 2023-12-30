import axios from 'axios'
import { ref, onMounted } from 'vue'

export function useEmployees() {
  const employees = ref(null)
  const pageInfo = ref(null)
  const errors = ref(null)
  const isLoading = ref(false)

  const getEmployees = async (search, filters, page = 1) => {
    isLoading.value = true

    const query = []

    if (search) {
      query.push('q=' + search)
    }

    if (filters) {
      for (const { field, value } of filters) {
        console.log(field, value)
        query.push(field + '=' + value)
      }
    }

    if (page) {
      query.push('page=' + page)
    }

    // 'field=value'
    const queryString = query.join('&')

    console.log(queryString)

    const url = `/employees?${query.length === 1 ? query[0] : queryString}`

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

  // get employees on owner component's mount
  onMounted(() => getEmployees())

  return { employees, errors, isLoading, pageInfo, getEmployees }
}
