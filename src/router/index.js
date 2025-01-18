import { createRouter, createWebHashHistory } from 'vue-router'
import AdminPanel from '@/views/AdminPanel.vue'
import HomeView from '@/views/HomeView.vue'
import MainView from '@/views/MainView.vue'

const routes = [
  {
    path: '/',
    name: 'MainView',
    component: MainView
  },
  {
    path: '/home',
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
