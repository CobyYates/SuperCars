import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import { routes } from './routes'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  vuetify,
  router: router,
  render: h => h(App)
}).$mount('#app')

/* 
Setup navigation
Add different pages
add router in app.vue
*/