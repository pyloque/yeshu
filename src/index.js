import Vue from 'vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter()

import App from './app'

new Vue({
  el: '#app',
  router,
  components: {
  	App
  },
  template: '<App/>'
})
