<script setup>
import AnalyticsCard from '../components/AnalyticsCard.vue'
</script>

<template>
  <div class="pt-4">
    <section class="grid grid-cols-1 gap-4">
      <AnalyticsCard title="Employees" data="10" icon="fa-solid fa-users" />
      <AnalyticsCard title="Leaves" data="10" icon="fa-solid fa-person-walking-arrow-right" />
      <AnalyticsCard title="Item Requests" data="10" icon="fa-solid fa-clipboard-list" />
    </section>
  </div>
</template>

<script>
export default {
  name: 'DashboardView'
}
</script>
