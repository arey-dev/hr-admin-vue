<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  label: String,
  errorMessage: String,
  isInvalid: Boolean
})
</script>

<template>
  <div>
    <label :for="name" class="text-body-md text-light-neutral inline-block mb-2">{{ label }}</label>
    <input
      :id="name"
      :name="name"
      :type="type"
      :class="{ 'border-danger': errorMessage }"
      class="w-full rounded-[0.25rem] mb-1 focus:border-light-primary focus:ring-0"
    />
    <p class="text-danger text-body-md" :class="{ invisible: !errorMessage }">
      {{ errorMessage ?? 'Invalid Message' }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'FormInput'
}
</script>
