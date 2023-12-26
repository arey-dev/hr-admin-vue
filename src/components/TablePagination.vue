<script setup>
import Button from './Button.vue'
import { computed } from 'vue'

const props = defineProps({
  currentPage: {
    validator(value) {
      return typeof value === 'number' || value === 'null'
    }
  },
  totalPages: {
    validator(value) {
      return typeof value === 'number' || value === 'null'
    }
  }
})

const isLastPage = computed(() => {
  return props.currentPage === props.totalPages
})

const isFirstPage = computed(() => {
  return props.currentPage === 1
})
</script>

<template>
  <div class="flex justify-between items-center">
    <Button
      @click="$emit('onPreviousPage', null, currentPage - 1)"
      variant="secondary"
      :disabled="isFirstPage"
      class="w-28"
    >
      <font-awesome-icon icon="fa-solid fa-arrow-left" class="me-2" />
      Previous
    </Button>
    <span class="text-body-lg text-light-primary dark:text-dark-primary">{{ currentPage }}</span>
    <Button
      @click="$emit('onNextPage', null, currentPage + 1)"
      variant="secondary"
      :disabled="isLastPage"
      class="w-28"
    >
      Next
      <font-awesome-icon icon="fa-solid fa-arrow-right" class="ms-2" />
    </Button>
  </div>
</template>
