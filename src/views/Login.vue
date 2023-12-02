<script setup>
import Input from '../components/forms/Input.vue'
</script>

<template>
  <section class="flex gap-8 flex-col w-full bg-light-surface p-6 rounded-md">
    <h1 class="tracking-wide text-heading-xl text-center">Welcome, Admin!</h1>
    <div class="flex flex-col gap-1">
      <Input label="Email" name="email" type="text" />
      <Input label="Password" name="password" type="password" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppLogin'
}
</script>
