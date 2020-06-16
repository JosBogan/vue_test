import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
// import Vuex from 'vuex'

import Home from './components/Home.vue'
import Browse from './components/Browse.vue'

Vue.use(VueRouter)

// Vue.use(Vuex)

const routes = [
  { path: '/browse', component: Browse },
  { path: '/', component: Home }
]

// import data from './assets/data.js'

const router = new VueRouter({
  routes
})

// const state = new Vuex.Store({
//   state: {
//     data
//   }
// })

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // state,
  router
}).$mount('#app')
