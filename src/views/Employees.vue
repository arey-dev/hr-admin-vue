<script setup>
import Search from '../components/forms/Search.vue'

const data = [
  {
    id: 'Apple MacBook Pro 17',
    name: 'Silver',
    designation: 'Laptop',
    status: '$2999'
  },
  {
    id: 'Microsoft Surface Pro',
    name: 'Silver',
    designation: 'Laptop PC',
    status: '$1999'
  },
  {
    id: 'Magic Mouse 2',
    name: 'Silver',
    designation: 'Accessories',
    status: '$99'
  }
]
</script>

<template>
  <div class="pt-4">
    <section class="grid grid-cols-1 gap-4">
      <Search />

      <div class="relative overflow-x-auto shadow-md rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead
            class="text-heading-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">Employee Id</th>
              <th scope="col" class="px-6 py-3">
                <div class="flex items-center">
                  Name
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
                  Designation
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
            <tr
              v-for="item in data"
              :key="item.id"
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {{ item.id }}
              </th>
              <td class="px-6 py-4">{{ item.name }}</td>
              <td class="px-6 py-4">{{ item.designation }}</td>
              <td class="px-6 py-4">{{ item.status }}</td>
              <td class="px-6 py-4 text-right">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >Edit</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'EmployeesView'
}
</script>
