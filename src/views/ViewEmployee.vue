<script setup>
import { useEmployees } from '../composables/useEmployees'
import { useRouter } from 'vue-router'
import { onBeforeMount } from 'vue'
import Avatar from '../components/Avatar.vue'

const { currentRoute } = useRouter()

const employeeId = currentRoute.value.params.id

const { employee, isLoading, getEmployee } = useEmployees()

onBeforeMount(() => {
  getEmployee(employeeId)
})
</script>

<template>
  <div class="pt-6">
    <div v-if="isLoading">loading</div>
    <div v-else class="grid grid-cols-1 gap-4">
      <section class="flex flex-col items-center">
        <Avatar
          :f_name="employee.f_name"
          :l_name="employee.l_name"
          class="w-[5.5rem] h-[5.5rem] border-2 border-light-primary mb-2"
        />
        <h2 class="text-heading-md text-light-onSurface">
          {{ employee.f_name + ' ' + employee.l_name }}
        </h2>
        <p class="text-body-lg text-light-neutral">{{ employee.job_title }}</p>
      </section>

      <section class="bg-light-surface p-4 rounded-lg">
        <h2 class="text-heading-md text-light-onSurface mb-4">Basic Info</h2>

        <p class="mb-2">
          <span class="text-xs text-light-neutral inline-block dark:text-dark-onSurface"
            >Full Name</span
          ><span
            class="w-full text-sm text-light-onSurface inline-block rounded-[0.25rem] border-[#828fa3] border-opacity-25 mb-1 focus:border-light-primary focus:ring-0 dark:bg-dark-surface dark:text-dark-onSurface"
            >{{ employee.f_name + ' ' + employee.l_name }}</span
          >
        </p>

        <p class="mb-2">
          <span class="text-xs text-light-neutral inline-block dark:text-dark-onSurface"
            >Email</span
          >
          <span
            class="w-full text-sm text-light-onSurface inline-block rounded-[0.25rem] border-[#828fa3] border-opacity-25 mb-1 focus:border-light-primary focus:ring-0 dark:bg-dark-surface dark:text-dark-onSurface"
            >{{ employee.email }}</span
          >
        </p>

        <p>
          <span class="text-xs text-light-neutral inline-block dark:text-dark-onSurface"
            >Contact</span
          ><span
            class="w-full text-sm text-light-onSurface inline-block rounded-[0.25rem] border-[#828fa3] border-opacity-25 mb-1 focus:border-light-primary focus:ring-0 dark:bg-dark-surface dark:text-dark-onSurface"
            >09613004168</span
          >
        </p>
      </section>
    </div>
  </div>
</template>
