import Vue from 'vue';
import Router from 'vue-router';
import home from '../components/home.vue';

Vue.use(Router)
  
export default new Router({
  routes: [
      //映射
        {
            path: '/home',
            name: 'home',
            component: home
        },
        //重定向
        {
            path: '/', 
            redirect: '/home' 
        }
    ]
})


