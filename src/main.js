import Vue from 'vue'
import App from './App.vue'
// 引入路由router index 文件
import router from './router/index.js'

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})