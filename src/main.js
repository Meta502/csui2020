import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VuePaginate from 'vue-paginate'
import router from './router'
import VueLazyload from 'vue-lazyload'

Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.use(VuePaginate)
Vue.use(VueLazyload, {
  // set observer to true
  loading: 'static/svg/loading.webp',
  attempt: 1,
  observer: true,

  // optional
  observerOptions: {
    rootMargin: '0px',
    threshold: 0.1
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
