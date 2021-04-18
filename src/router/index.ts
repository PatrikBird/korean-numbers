import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Insert from '../views/Insert.vue'
import Random from '../views/Random.vue'
import KoreanNumbers from '@/views/KoreanNumbers.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'KoreanNumbers',
    component: KoreanNumbers,
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
