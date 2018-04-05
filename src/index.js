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
      ['link', 'image', 'video'],
      ['screenfull']
    ],
    syntax: {
      highlight: text => hljs.highlightAuto(text).value
    }
  },
  theme: "snow"
})

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

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
