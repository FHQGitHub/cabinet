import Vuex from "vuex"
import Vue from 'vue/dist/vue.js'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      user_id:"",
      user_password:""
    },
    mutations: {
      login(state,user){
        user=JSON.parse(user)
        state.user_id=user.account
        state.user_password=user.password
      },
      logout(state){
        state.user_id=""
        state.user_type=""
      },
    },
    actions:{

    }
  })

  export default store