import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },

    {
      path: '/cabinet',
      name: 'cabinet',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
    },
    {
      path:'/search',
      name:'search',
      component:() =>import('./views/Search.vue')
    },
    {
      path:'/resistance',
      name:'resistance',
      component:() =>import('./views/Resistance.vue')
    },
    {
      path:'/inductance',
      name:'inductance',
      component:() =>import('./views/Inductance.vue')
    },
    {
      path:'/capactance',
      name:'capactance',
      component:() =>import('./views/Capactance.vue')
    },
    {
      path:'/sresistance',
      name:'sresistance',
      component:() =>import('./views/SResis.vue')
    }
  ]
})
