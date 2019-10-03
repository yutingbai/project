import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import Router from 'vue-router'

Vue.config.productionTip = false

import axios from 'axios'
Vue.prototype.axios = axios;



const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


