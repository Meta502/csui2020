import Vue from 'vue'
import VueRouter from 'vue-router'
import Fam from '../views/Fam.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: "CSUI2020 - Home"
    }
  },
  {
    path: '/fam',
    name: 'Fam',
    component: Fam,
    meta: {
      title: "CSUI2020 - Meet Our Fam"
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
