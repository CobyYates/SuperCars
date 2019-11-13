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
  mode: 'history'
})

new Vue({
  vuetify,
  router: router,
  store,
  render: h => h(App)
}).$mount('#app')

/* 
Setup navigation with names and path (Nov 4 time: 3:37 in Zoom)
{
  path: '/remote'
  name: 'remote'
  components: remote
}
*/