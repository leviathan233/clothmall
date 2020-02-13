<template>
	<div class="shopcartBar">
    <div class="left">
      总计：￥{{$store.getters.getCartListPrice | priceFilter}}
    </div>
    <div class="right">
      <div class="clear" @click="clearCart">清空购物车</div>
      <div class="settle">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopcartBar",
  filters:{
    priceFilter:function(val){
      return (val/100).toFixed(2)
    }
  },
	data(){
		return {}
	},
	components: {},
	created(){},
	mounted(){},
  methods: {
    clearCart(){
      this.$store.commit('clearCart')
    }
  }
}
</script>
<style scoped>
  .shopcartBar{
    height: 49px;
    position: fixed;
    bottom: 49px;
    right: 0;
    left: 0;
    background-color: white; 
    display: flex;
    z-index: 2;
  }
  .left{
    line-height: 49px;
    padding-left: 5px;
  }
  .left,.right{
    flex: 1;
    display: flex;
  }
  .clear,.settle{
    text-align: center;
    line-height: 49px;
    flex:1;
  }
  .clear{
    background-color:red;
    color: white
  }
  .settle{
    background-color: pink;
    color:black;
  }
</style>
