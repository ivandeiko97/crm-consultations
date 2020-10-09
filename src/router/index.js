import Vue from 'vue'
import VueRouter from 'vue-router'

import patients from './patients'
import consultations from './consultations'
import protectedRoutes from './protectedRoutes'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/patients'
  },
  patients,
  consultations,
  {
    path: '/404',
    name: '404',
    component: () => import('../views/NotFound.vue')
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach(async (to, from, next) => {
  if (protectedRoutes[to.name]) {
    const isValid = await protectedRoutes[to.name](to.params)
    if (isValid) {
      next()
    } else {
      next('/404')
    }
  }
  else next()
})

export default router
