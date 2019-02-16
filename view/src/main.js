import Vue from 'vue'
import ElementUI from 'element-ui';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import Vuex from 'vuex'
import axios from 'axios'

import router from './router'
import store from './store/index'

const cookie =require('./store/cookie')
const datasource=require("./service/api")

Vue.use(ElementUI);
Vue.use(Element);
Vue.use(Vuex);

Vue.config.productionTip = false

Vue.prototype.$dataSource= datasource.default
Vue.prototype.$cookie=cookie.default

// router.beforeEach((to, from, next) => {
//   /* 判断该路由是否需要登录权限 */
//   if (to.matched.some(record => record.meta.requireAuth)) {
//     //是否登录
//             if (store.state.user_id == " ") {
//                 //未登录
//                 if (store.state.user_password == " ") {
//                     next({
//                         path: '/home',
//                     })
//                 } else {
//                     //已登录
//                     next()
//                 }
//             }

//   }
//   next();
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')