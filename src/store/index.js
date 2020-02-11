import Vue from "vue";
import Vuex from "vuex";
import {getDetail} from "network/detail";

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    cartList:[]
  },
  mutations:{
    addToCart(state,res){
      state.cartList.push(res)
    }
  },
  actions:{
    addToCart(state,payload){
      getDetail(payload).then(res => {
        state.commit('addToCart',res)
      })
    }
  }
})
export default store
