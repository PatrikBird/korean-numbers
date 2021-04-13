import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import UkrainianNumbers from '../views/UkrainianNumbers.vue'
import Insert from '../views/Insert.vue'
import Random from '../views/Random.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'UkrainianNumbers',
    component: UkrainianNumbers,
  },
  {
    path: '/insert',
    name: 'Insert',
    component: Insert,
  },
  {
    path: '/random',
    name: 'Random',
    component: Random,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
