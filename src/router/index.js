import { createRouter, createWebHistory } from 'vue-router'
import AddView from '../views/AddView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'add',
      component: AddView
    },
    {
      path: '/preview',
      name: 'preview',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PreviewView.vue')
    }
  ]
})

export default router
