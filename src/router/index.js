import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Employees from '../views/Employees.vue'
import Employee from '../views/Employee.vue'
import Profile from '../views/Profile.vue'
import AuthLayout from '../components/layouts/AuthLayout.vue'
import AppLayout from '../components/layouts/AppLayout.vue'
import { useAuthUserStore } from '../store/AuthUserStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppLayout,
      redirect: '/dashboard',
      meta: {
        requiresAuth: true
      },
      children: [
        { path: 'dashboard', name: 'Dashboard', component: Dashboard },
        { path: 'employees', name: 'Employees', component: Employees },
        { path: 'profile', name: 'Profile', component: Profile },
        { path: 'employees/:id', name: 'Employee', component: Employee }
      ]
    },
    {
      path: '/auth',
      component: AuthLayout,
      meta: {
        requiresAuth: false
      },
      children: [{ path: 'login', name: 'Login', component: Login }]
    }
  ]
})

// eslint-disable-next-line no-unused-vars
router.beforeEach((to, from) => {
  const auth = useAuthUserStore()

  // if route requires auth and,
  // and there is no authenticated user
  if (to.meta.requiresAuth && !Object.keys(auth.user).length) {
    // redirect to login
    return {
      path: '/auth/login',
      // save the location we were at to come back later
      query: { redirect: to.fullPath }
    }
  }
})

export default router
