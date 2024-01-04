<script setup>
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { useEmployees } from '../composables/useEmployees'
import Input from '../components/forms/Input.vue'
import Button from '../components/Button.vue'
import Spinner from '../components/Spinner.vue'

const router = useRouter()

const { addEmployee, errors, isSuccess, isLoading } = useEmployees()

const formData = ref({
  f_name: '',
  l_name: '',
  email: '',
  job_title: '',
  job_level: '',
  employment_start: ''
})

const onSubmit = async () => {
  await addEmployee(formData.value)

  if (isSuccess.value) router.back()
}
</script>

<template>
  <TransitionRoot appear :show="true" as="template">
    <Dialog as="div" @close="router.back" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              as="form"
              @submit.prevent="onSubmit"
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-light-surface p-6 align-middle shadow-xl transition-all"
            >
              <DialogTitle as="h3" class="text-heading-lg mb-2 text-light-onSurface">
                Add Employee
              </DialogTitle>

              <div class="mb-4">
                <Input
                  label="First Name"
                  name="f_name"
                  v-model="formData.f_name"
                  :error-message="errors?.f_name[0]"
                />
                <Input
                  label="Last Name"
                  name="l_name"
                  v-model="formData.l_name"
                  :error-message="errors?.l_name[0]"
                />
                <Input
                  label="Email"
                  name="l_name"
                  type="email"
                  v-model="formData.email"
                  :error-message="errors?.email[0]"
                />
                <Input
                  label="Job Title"
                  name="job_title"
                  v-model="formData.job_title"
                  :error-message="errors?.job_title[0]"
                />
                <Input
                  label="Job Level"
                  name="job_level"
                  v-model="formData.job_level"
                  :error-message="errors?.job_level[0]"
                />
                <Input
                  label="Employment Start"
                  name="employment_start"
                  type="date"
                  v-model="formData.employment_start"
                  :error-message="errors?.employment_start[0]"
                />
              </div>

              <div class="flex flex-col gap-2">
                <Spinner v-if="isLoading" />
                <Button v-else type="submit" value="Add Employee" />
                <Button variant="secondary" value="Cancel" @click="router.back" />
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
