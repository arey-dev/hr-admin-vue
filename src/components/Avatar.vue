<script setup>
import { autoPickColor } from '../utils/autoPickColor'

defineProps({
  f_name: { type: String },
  l_name: { type: String }
})
</script>

<template>
  <div
    :style="{ backgroundColor: autoPickColor() }"
    class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden rounded-full"
  >
    <span class="text-body-lg text-gray-600 dark:text-gray-600">{{
      f_name.charAt(0).toUpperCase() + l_name.charAt(0).toUpperCase()
    }}</span>
  </div>
</template>

<script>
export default {
  name: 'UserAvatar'
}
</script>
