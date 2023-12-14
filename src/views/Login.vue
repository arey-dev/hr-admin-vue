<script setup>
import Input from '../components/forms/Input.vue'
import Button from '../components/Button.vue'
import { useAuthStore } from '../store/AuthStore'
import { ref } from 'vue'

const store = useAuthStore()

const credentials = ref({
  email: '',
  password: ''
})

async function onSubmit() {
  await store.login({ ...credentials.value })
}
</script>

<template>
  <form
    @submit.prevent="onSubmit"
    class="flex gap-8 flex-col w-full bg-light-surface p-6 rounded-md shadow-md dark:bg-dark-surface"
  >
    <h1
      class="tracking-wide text-heading-xl text-light-onSurface text-center dark:text-dark-onSurface"
    >
      Welcome, Admin!
    </h1>

    <div class="flex flex-col gap-1 mb-4">
      <Input label="Email" name="email" type="text" v-model="credentials.email" />
      <Input label="Password" name="password" type="password" v-model="credentials.password" />
    </div>

    <Button variant="secondary" />
  </form>
</template>

<script>
export default {
  name: 'AppLogin'
}
</script>
