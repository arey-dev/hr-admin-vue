<script setup>
import Input from '../components/forms/Input.vue'
import Button from '../components/Button.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Spinner from '../components/Spinner.vue'
import { useAuth } from '../composables/useAuth'

const router = useRouter()

const { isLoading, errors, login } = useAuth()

const credentials = ref({
  email: '',
  password: ''
})

async function onSubmit() {
  await login(credentials.value)

  if (errors) {
    console.log(errors)
    return
  }

  await router.push('/employees')
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

    <div class="flex flex-col gap-1">
      <Input
        label="Email"
        name="email"
        type="text"
        :error-message="errors?.email[0]"
        v-model="credentials.email"
      />
      <Input
        label="Password"
        name="password"
        type="password"
        :error-message="errors?.password[0]"
        v-model="credentials.password"
      />
    </div>

    <Spinner v-if="isLoading" />
    <Button v-else variant="secondary" value="Login" />
  </form>
</template>

<script>
export default {
  name: 'LoginView'
}
</script>
