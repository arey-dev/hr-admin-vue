<script setup>
import Logo from '../Logo.vue'
import Avatar from '../Avatar.vue'
import NavPopover from '../NavPopover.vue'
</script>

<template>
  <div class="p-2">
    <nav
      class="flex bg-light-surface p-4 items-center rounded-lg border border-light-lines dark:bg-dark-surface dark:border-dark-lines"
    >
      <Logo class="w-6 mr-4" />

      <!-- popover -->
      <NavPopover />

      <!-- Avatar -->
      <Avatar class="ml-auto" />
    </nav>
    <RouterView />
  </div>
</template>
