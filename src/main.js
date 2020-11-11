import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VuePaginate from 'vue-paginate'

Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.use(VuePaginate)

new Vue({
  render: h => h(App),
}).$mount('#app')
