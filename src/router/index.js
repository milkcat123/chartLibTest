import Vue from 'vue'
import VueRouter from 'vue-router'
import ChartView from '../views/ChartView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'chartview',
    component: ChartView
  },
]

const router = new VueRouter({
  routes
})

export default router
