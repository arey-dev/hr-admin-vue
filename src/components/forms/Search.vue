<script setup>
defineEmits(['onSubmit', 'update:modelValue'])

defineProps({
  modelValue: {
    type: String,
    required: true
  }
})
</script>

<template>
  <form @submit.prevent="$emit('onSubmit', modelValue)" class="flex w-full items-center">
    <label for="q" class="sr-only">Search</label>
    <input
      id="q"
      name="q"
      type="text"
      :value="modelValue"
      placeholder="Search"
      class="w-full text-body-lg text-light-onSurface rounded-lg border-[#828fa3] border-opacity-25 focus:border-light-primary focus:ring-0 dark:bg-dark-surface dark:text-dark-onSurface"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <button
      type="submit"
      class="py-2 px-2.5 ms-2 text-sm font-medium text-white bg-light-primary rounded-lg border border-light-primary/50 hover:bg-hover-primary focus:ring-1 focus:outline-none focus:ring-light-primary dark:bg-dark-primary dark:focus:ring-dark-primary transition ease-in-out duration-300'"
    >
      <font-awesome-icon
        icon="fa-solid fa-search"
        class="w-4 h-4 text-light-onPrimary dark:text-dark-onPrimary"
        aria-hidden="true"
      />

      <span class="sr-only">Search</span>
    </button>
  </form>
</template>

<script>
export default {
  name: 'FormSearch'
}
</script>
