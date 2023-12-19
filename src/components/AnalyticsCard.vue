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
  <article
    class="flex items-center p-8 bg-light-surface rounded-lg border border-light-lines dark:border-dark-lines dark:bg-dark-surface"
  >
    <div
      class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6 dark:bg-dark-onSurface"
    >
      <font-awesome-icon
        :icon="icon"
        class="w-6 h-6 text-light-primary dark:text-dark-primary"
        aria-hidden="true"
      />
    </div>
    <div>
      <h2 class="block text-light-neutral dark:text-dark-neutral">{{ title }}</h2>
      <p class="text-heading-xl text-light-onSurface dark:text-dark-onSurface">{{ data }}</p>
    </div>
  </article>
</template>
