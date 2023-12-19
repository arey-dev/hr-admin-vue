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
      redirect: '/dashboard',
      children: [
        { path: 'dashboard', name: 'Dashboard', component: Dashboard },
        { path: 'employees', name: 'Employees', component: Employees },
        { path: 'profile', name: 'Profile', component: Profile }
      ]
    },
    { path: '/auth', component: AuthLayout, children: [{ path: 'login', component: Login }] }
  ]
})

export default router
