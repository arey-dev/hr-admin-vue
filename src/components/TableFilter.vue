<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

const options = [
  { field: 'status', value: 'Active' },
  { field: 'status', value: 'Inactive' },
  { field: 'job_level', value: 'Lead' },
  { field: 'job_level', value: 'Senior' },
  { field: 'job_level', value: 'Junior' },
  { field: 'job_level', value: 'Middle' },
  { field: 'job_level', value: 'Intern    ' },
]
</script>

<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton
        v-slot="{ open }"
        class="inline-flex w-44 items-center justify-between rounded-lg bg-light-surface px-4 py-2 text-body-lg tracking-wider text-light-onSurface border border-light-lines hover:bg-neutral-50 focus:outline-none focus-visible:ring-1 focus-visible:ring-light-primary dark:bg-dark-surface dark:text-dark-onSurface dark:border-dark-lines dark:hover:bg-neutral-800"
      >
        Filters
        <font-awesome-icon
          icon="fa-solid fa-chevron-down"
          :class="{ 'rotate-180 transform': open }"
          class="w-4 h-2.5 transition duration-150 ease-in-out text-light-primary dark:text-dark-primary"
          aria-hidden="true"
        />
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute z-20 left-0 mt-2 w-48 origin-top-right rounded-lg p-1 bg-light-surface shadow-lg ring-1 ring-black/5 focus:outline-none dark:bg-dark-surface"
      >
        <MenuItem v-slot="{ active }" v-for="option in options" :key="option.value">
          <button
            @click="$emit('onFilterSelect', option)"
            :class="[
              active ? 'bg-violet-500 text-white' : 'text-light-neutral dark:text-dark-neutral',
              'group flex w-full items-center rounded-md px-2 py-2 text-sm'
            ]"
          >
            {{ option.value }}
          </button>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>
