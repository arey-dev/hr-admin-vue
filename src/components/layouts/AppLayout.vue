<script setup>
import Logo from '../Logo.vue'
import Avatar from '../Avatar.vue'
import NavPopover from '../NavPopover.vue'
import { useAuthStore } from '../../store/AuthStore'

const store = useAuthStore()
</script>

<template>
  <div class="p-4">
    <nav
      class="flex bg-light-surface p-4 items-center rounded-lg border border-light-lines dark:bg-dark-surface dark:border-dark-lines"
    >
      <Logo class="w-6 mr-4" />

      <!-- popover -->
      <NavPopover />

      <!-- Avatar -->
      <Avatar :f_name="store.user.f_name" :l_name="store.user.l_name" class="ml-auto" />
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>
