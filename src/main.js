import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import { routes } from './routes'

import store from './store/store'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString()
})

new Vue({
  vuetify,
  router: router,
  store,
  render: h => h(App)
}).$mount('#app')