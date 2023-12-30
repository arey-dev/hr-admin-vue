<script setup>
defineProps({
  label: {
    type: String,
    required: true
  },
  icon: {
    type: String
  },
  removable: {
    type: Boolean
  }
})
</script>

<template>
  <div class="inline-flex bg-light-primary text-white text-body-lg rounded-full py-1 px-2 gap-2">
    <font-awesome-icon v-if="icon" :icon="icon" />
    <span>
      {{ label }}
    </span>
    <button v-if="removable" @click="$emit('onRemove')">
      <font-awesome-icon icon="fa-solid fa-circle-xmark" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'AppChip'
}
</script>
