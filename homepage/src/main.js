import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Entrance from './components/entrance'
// Vue.config.productionTip = false
// new Vue({
//   render: h => h(App),
// }).$mount('#app')
Vue.use(VueRouter)
const routes = [
  //注意这里一定不能加s，否则报错
    {
      path: '/home',
      component: Home
    },
    {
      path: '/',
      component: Entrance
    },
    //防输错或者没找到页面路由错误，跳转到首页
    {
      path: '*',
      redirect: '/'
    }
]
const router = new VueRouter ({
    routes,
    mode: 'history'
})
Vue.config.productionTip = false
new Vue({
    router,
  render: h => h(App)
}).$mount('#app')
