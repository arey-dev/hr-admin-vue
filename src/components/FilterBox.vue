<script setup>
import Chip from './Chip.vue'

defineProps({
  filters: {
    type: Set,
    required: true
  },
  onRemove: {
    type: Function
  }
})
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <Chip v-for="filter in filters" :key="filter" :label="filter" removable @on-remove="onRemove">
      {{ filter }}
    </Chip>
  </div>
</template>
