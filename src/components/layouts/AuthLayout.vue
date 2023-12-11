<script setup>
defineProps({
  type: String
})
</script>

<template>
  <main
    class="flex flex-col min-h-screen justify-center items-center bg-light-background dark:bg-dark-background p-4"
  >
    <slot></slot>
  </main>
</template>
