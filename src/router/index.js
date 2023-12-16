import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Employees from '../views/Employees.vue'
import Profile from '../views/Profile.vue'
import AuthLayout from '../components/layouts/AuthLayout.vue'
import AppLayout from '../components/layouts/AppLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        { path: 'dashboard', component: Dashboard },
        { path: 'employees', component: Employees },
        { path: 'profile', component: Profile }
      ]
    },
    { path: '/auth', component: AuthLayout, children: [{ path: 'login', component: Login }] }
  ]
})

export default router
