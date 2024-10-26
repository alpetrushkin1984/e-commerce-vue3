import { createRouter, createWebHistory } from 'vue-router'
import home from '@/router/routes/home.js'
import cart from '@/router/routes/cart.js'
import favorites from '@/router/routes/favorites.js'
import product from '@/router/routes/product.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...home,
    ...cart,
    ...favorites,
    ...product,
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
})

export default router
