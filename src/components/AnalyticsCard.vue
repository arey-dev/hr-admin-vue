<script setup>
defineProps({
  title: {
    type: String,
    default: 'Title'
  },
  data: {
    type: String,
    default: '10'
  },
  icon: {
    type: String,
    default: 'fa-solid fa-chart-simple'
  }
})
</script>

<template>
  <div class="flex items-center p-8 bg-white shadow rounded-lg">
    <div
      class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6"
    >
      <font-awesome-icon
        :icon="icon"
        class="w-6 h-6 text-light-primary dark:text-dark-primary"
        aria-hidden="true"
      />
    </div>
    <div>
      <span class="block text-heading-xl">{{ data }}</span>
      <span class="block text-light-neutral">{{ title }}</span>
    </div>
  </div>
</template>
