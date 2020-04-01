import Vue from 'vue'
import VueRouter from 'vue-router'
import PieChartData from '../views/PieChartData.vue'
import TimelineGraphData from '../views/TimelineGraphData.vue'
import USCasesData from '../views/USCasesData.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Pie Chart Data',
    component: PieChartData
  },
  {
    path: '/us-cases',
    name: 'US cases Data',
    component: USCasesData
  },
  {
    path: '/timeline',
    name: 'Timeline Graph Data',
    component: TimelineGraphData
  }
]

const router = new VueRouter({
  routes
})

export default router
