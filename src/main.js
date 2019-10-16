import Vue from 'vue'
import App from './App.vue'
<<<<<<< HEAD
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

=======
import router from './router'
import store from './store'

Vue.config.productionTip = false

>>>>>>> 3156de3f8efd0ab0663d3cd311fb4670b2aaabfe
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
<<<<<<< HEAD


=======
>>>>>>> 3156de3f8efd0ab0663d3cd311fb4670b2aaabfe
