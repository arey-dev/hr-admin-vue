<script setup>
defineProps({
  status: {
    type: String,
    default: 'Active'
  }
})
</script>

<template>
  <span
    :class="[
      status === 'Active'
        ? 'text-green-800 bg-green-100 dark:bg-green-900 dark:text-green-300'
        : 'text-red-800 bg-red-100 dark:bg-red-900 dark:text-red-300'
    ]"
    class="inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full"
  >
    <span
      :class="[status === 'Active' ? 'bg-green-500' : 'bg-red-500']"
      class="w-2 h-2 me-1 rounded-full"
    ></span>
    {{ status }}
  </span>
</template>
