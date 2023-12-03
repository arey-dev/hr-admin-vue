<script setup>
import { computed } from 'vue'

// PROPS
const props = defineProps({
  type: {
    type: String,
    default: 'button'
  },
  className: String,
  variant: {
    validator(value) {
      return ['primary', 'secondary', 'danger'].includes(value)
    },
    default: 'primary'
  },
  size: {
    validator(value) {
      return ['large', 'small'].includes(value)
    },
    default: 'small'
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const buttonClass = computed(() => [
  // BASE STYLE
  'focus:outline-none rounded-full transition ease-in-out duration-300',

  // DISABLED
  props.disabled ? 'opacity-50 !cursor-not-allowed' : '',

  // SIZE
  props.size === 'small'
    ? 'py-[0.5rem] px-4 text-body-lg font-bold' // SMALL
    : 'py-[0.875rem] px-4 text-heading-md', // LARGE

  // VARIANTS
  props.variant === 'primary'
    ? // PRIMARY
      'bg-light-primary text-light-onPrimary hover:bg-hover-primary focus:ring-2 focus:ring-light-primary'
    : props.variant === 'secondary'
      ? // SECONDARY
        'bg-[#635FC7] bg-opacity-10 hover:bg-opacity-25 text-light-primary focus:ring-2 focus:ring-[#635FC7] focus:ring-opacity-10 dark:bg-light-surface dark:focus:ring-2 dark:focus:ring-light-surface'
      : props.variant === 'danger'
        ? // DANGER
          'bg-danger text-onDanger hover:bg-hover-danger'
        : ''
])
</script>

<template>
  <button :class="buttonClass">Button</button>
</template>

<script>
export default {
  name: 'AppButton'
}
</script>