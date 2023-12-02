<script setup>
defineProps({
  type: String
})
</script>

<template>
  <template v-if="type === 'Guest'">
    <main
      class="flex flex-col min-h-screen justify-center items-center bg-light-background dark:bg-dark-background p-4"
    >
      <slot></slot>
    </main>
  </template>

  <template v-else>
    <main>
      <slot></slot>
    </main>
  </template>
</template>

<script>
export default {
  name: 'AppLayout'
}
</script>
