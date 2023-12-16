<script setup>
import AnalyticsCard from '../components/AnalyticsCard.vue'
</script>

<template>
  <div class="flex flex-col gap-2 py-2">
    <AnalyticsCard title="Employees" data="10" icon="fa-solid fa-users" />
    <AnalyticsCard title="Leaves" data="10" icon="fa-solid fa-person-walking-arrow-right" />
  </div>
</template>

<script>
export default {
  name: 'DashboardView'
}
</script>
