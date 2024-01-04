<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'

const pages = [
  {
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'fa-solid fa-chart-simple'
  },
  {
    name: 'Employees',
    to: '/employees',
    icon: 'fa-solid fa-users'
  },
  {
    name: 'Profile',
    to: '/profile',
    icon: 'fa-solid fa-user'
  }
]
</script>

<template>
  <Popover v-slot="{ open }" class="relative">
    <PopoverButton
      class="inline-flex items-center text-heading-lg text-light-onSurface focus:outline-none dark:text-dark-onSurface"
    >
      <span class="mr-2">{{ $route.meta.name }}</span
      ><font-awesome-icon
        icon="fa-solid fa-chevron-down"
        :class="{ 'rotate-180 transform': open }"
        class="h-3 w-4 transition duration-150 ease-in-out text-light-primary dark:text-dark-primary"
        aria-hidden="true"
    /></PopoverButton>

    <PopoverPanel v-slot="{ close }" class="absolute z-10 mt-3">
      <div
        class="w-[15rem] flex flex-col bg-light-surface p-4 border border-light-lines rounded-lg shadow-md dark:bg-dark-surface dark:border-dark-lines"
      >
        <RouterLink
          @click="close()"
          v-for="item in pages"
          :key="item.name"
          :to="item.to"
          class="flex items-center rounded-full p-[0.875rem] transition duration-150 ease-in-out focus:outline-none"
        >
          <font-awesome-icon
            :icon="item.icon"
            class="w-4 h-4 text-light-neutral mr-3 dark:text-dark-neutral"
            aria-hidden="true"
          />

          <p class="text-heading-md text-light-neutral dark:text-dark-neutral">
            {{ item.name }}
          </p>
        </RouterLink>
      </div>
    </PopoverPanel>
  </Popover>
</template>
