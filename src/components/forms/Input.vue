<script setup>
defineEmits(['update:modelValue'])
defineProps({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  errorMessage: {
    type: String
  },
  isInvalid: {
    type: Boolean
  },
  modelValue: {
    type: String
  }
})
</script>

<template>
  <div>
    <label
      :for="name"
      class="text-body-md text-light-neutral inline-block mb-2 dark:text-dark-onSurface"
      >{{ label }}</label
    >
    <input
      :id="name"
      :name="name"
      :type="type"
      :value="modelValue"
      :class="{ 'border-danger': errorMessage }"
      class="w-full text-light-onSurface rounded-[0.25rem] border-[#828fa3] border-opacity-25 mb-1 focus:border-light-primary focus:ring-0 dark:bg-dark-surface dark:text-dark-onSurface"
      @input="$emit('update:modelValue', $event.target.value)"
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
