import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VuePaginate from 'vue-paginate'
import router from './router'
import VueLazyload from 'vue-lazyload'
import VueClipboard from 'vue-clipboard2'

import './registerServiceWorker'

Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.use(VuePaginate)
Vue.use(VueLazyload, {
  loading: 'static/svg/profilecircle.svg',
  error: 'static/svg/profilecircle.svg',
  attempt: 1,
  listenEvents: [ 'scroll' ],
  observer: true,
  observerOptions: {
    rootMargin: '75px 0px'
  },
  adapter: {
    loaded ({ $parent }) {
      console.log( $parent )
    }
  }
})

VueClipboard.config.autoSetContainer = true
Vue.use(VueClipboard)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
