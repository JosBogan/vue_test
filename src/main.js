import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Home from './components/Home.vue'
import Browse from './components/Browse.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/browse', component: Browse },
  { path: '/', component: Home }
]

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
