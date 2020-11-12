import Vue from 'vue'
import VueRouter from 'vue-router'
import Fam from '../views/Fam.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/fam',
    name: 'Fam',
    component: Fam
  }
]

const router = new VueRouter({
  routes
})

export default router
