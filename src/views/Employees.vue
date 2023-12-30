<script setup>
import { useEmployees } from '../composables/useEmployees'
import { formatDate } from '../utils/formatDate'
import { ref, watch } from 'vue'
import Search from '../components/forms/Search.vue'
import TableFilter from '../components/TableFilter.vue'
import Avatar from '../components/Avatar.vue'
import StatusIndicator from '../components/StatusIndicator.vue'
import TablePagination from '../components/TablePagination.vue'
import Spinner from '../components/Spinner.vue'
import FilterBox from '../components/FilterBox.vue'

const { employees, isLoading, pageInfo, getEmployees } = useEmployees()

const filters = ref(new Set())

const addFilter = (value) => {
  filters.value.add(value)
}

const deleteFilter = (value) => {
  filters.value.delete(value)
}

watch(filters.value, async () => {
  await getEmployees(null,filters.value)
})
</script>

<template>
  <div class="pt-4">
    <section class="grid grid-cols-1 gap-4">
      <div class="flex flex-col gap-4 items-start">
        <Search @on-submit="getEmployees" />
        <TableFilter @on-filter-select="addFilter" />
      </div>

      <FilterBox :filters="filters" :on-remove="deleteFilter" />

      <div class="relative overflow-x-auto overflow-y-visible shadow-md rounded-lg">
        <div v-if="isLoading" class="py-4">
          <Spinner />
        </div>
        <template v-else>
          <table
            class="w-full text-body-lg text-left rtl:text-right text-gray-500 dark:text-gray-400"
          >
            <thead
              class="text-heading-sm text-light-neutral uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
              <tr>
                <th scope="col" class="px-6 py-3">Id</th>
                <th scope="col" class="px-6 py-3">
                  <div class="flex items-center">
                    Employee
                    <a href="#"
                      ><font-awesome-icon
                        icon="fa-solid fa-sort"
                        class="w-2 h-3 ms-2 text-light-onSurface dark:text-dark-onPrimary"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div class="flex items-center">
                    Employed
                    <a href="#"
                      ><font-awesome-icon
                        icon="fa-solid fa-sort"
                        class="w-2 h-3 ms-2 text-light-onSurface dark:text-dark-onPrimary"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div class="flex items-center">
                    Job
                    <a href="#"
                      ><font-awesome-icon
                        icon="fa-solid fa-sort"
                        class="w-2 h-3 ms-2 text-light-onSurface dark:text-dark-onPrimary"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div class="flex items-center">
                    Status
                    <a href="#"
                      ><font-awesome-icon
                        icon="fa-solid fa-sort"
                        class="w-2 h-3 ms-2 text-light-onSurface dark:text-dark-onPrimary"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="!employees?.length">
                <td colspan="3" class="px-6 py-4 whitespace-nowrap text-center">No data found.</td>
              </tr>
              <template v-else>
                <tr
                  v-for="employee in employees"
                  :key="employee.id"
                  class="bg-light-surface border-b border-light-lines dark:bg-dark-surface dark:border-dark-lines"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {{ employee.id }}
                  </th>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex gap-4 items-center">
                      <Avatar :f_name="employee.f_name" :l_name="employee.l_name" />
                      <div>
                        <p>{{ employee.f_name + ' ' + employee.l_name }}</p>
                        <p>{{ employee.email }}</p>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4">{{ formatDate(employee.employment_start) }}</td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <p>{{ employee.job_title }}</p>
                    <p>{{ employee.job_level }}</p>
                  </td>
                  <td class="px-6 py-4"><StatusIndicator :status="employee.status" /></td>
                  <td class="px-6 py-4 text-right">
                    <font-awesome-icon icon="fa-solid fa-eye" />
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </template>
      </div>

      <TablePagination
        :current-page="pageInfo?.current_page"
        :total-pages="pageInfo?.last_page"
        @on-next-page="getEmployees"
        @on-previous-page="getEmployees"
      />
    </section>
  </div>
</template>

<script>
export default {
  name: 'EmployeesView'
}
</script>
