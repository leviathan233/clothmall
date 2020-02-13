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
      for(let key in state.cartList){
        if(state.cartList[key].data.iid == res.iid &&
          state.cartList[key].data.sku.sizeId == res.sku.sizeId &&
          state.cartList[key].data.sku.styleId == res.sku.styleId){
          return  state.cartList[key].count++
        }
      }
      return state.cartList.push({data:res,count:1})
    },
    changeCount(state,payload){
      state.cartList[payload.i].count = Number(payload.val)
    },
    addCount(state,i){
      state.cartList[i].count++
    },
    subCount(state,i){
      state.cartList[i].count--
    },
    removeItem(state,i){
      Vue.delete(state.cartList,i)
    }
  },
  actions:{
    addToCart(state,payload){
      getDetail(payload.iid).then(res => {
        Vue.set(res,'sku',payload)
        state.commit('addToCart',res)
      })
    }
  },
  getters:{
    getCartList(state){
      return state.cartList
    }
  }
})
export default store

