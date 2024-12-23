import { createRouter, createWebHashHistory } from 'vue-router'
import AdminPanel from '@/components/AdminPanel.vue'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminPanel
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
