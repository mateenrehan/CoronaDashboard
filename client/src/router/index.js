import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import USData from '../views/USData.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/todo',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/usa',
    name: 'US Data',
    component: USData
  }
]

const router = new VueRouter({
  routes
})

export default router
