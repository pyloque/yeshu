import Vue from 'vue'

import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-light.css'
import './mixin.css'

import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.use(VueQuillEditor, {
  modules: {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'indent': '-1' }, { 'indent': '+1' }],
      [{ 'align': '' }, {'align': 'center'}, {'align': 'right'}],
      [{ 'header': 1 }, { 'header': 2 }],
      [{ 'script': 'sub' }, { 'script': 'super' }],
      ['blockquote', 'code-block'],
      ['link', 'image'],
      ['screenfull']
    ],
    syntax: {
      highlight: text => hljs.highlightAuto(text).value
    }
  },
  theme: "snow"
})

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Filters from './filters'
Vue.use(Filters)

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
