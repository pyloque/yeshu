export default {
  install(Vue, options) {
    Vue.filter('zh', n => {
      return n.toLocaleString("zh-Hans-CN-u-nu-hanidec")
    })
  }
}
