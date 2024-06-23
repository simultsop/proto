import { createRouter, createWebHistory } from 'vue-router'
import PagesRoutes from './pages/routes';

const router = createRouter({
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'active-link',
  history: createWebHistory(),
  routes: [
    ...PagesRoutes,
  ]
})

export default router
