import Vue from 'vue'
import ElementUI from 'element-ui';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import Vuex from 'vuex'

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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')