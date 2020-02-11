<template>
  <div id="detailTabBar">
    <div class="left">
      <div class="service">
        <i class="icon service-icon"></i>
        <span>客服</span>
      </div>
      <div class="shop">
        <i class="icon shop-icon"></i>
        <span>店铺</span>
      </div>
      <div class="collect">
        <i class="icon collect-icon"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="right">
      <div class="shopcart" @click="addToCart">加入购物车</div>
      <div class="buy" @click="buyNow">立即购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailTabBar",
    methods:{
      addToCart(){
        this.$emit('addToCart')
      },
      buyNow(){
        this.$emit('buyNow')
      }
    }
  }
</script>

<style scoped>
  #detailTabBar{
    height: 60px;
    display: flex;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: white;
    z-index: 1;
    text-align: center;
  }
  .icon{
    display: block;
    width: 22px;
    height: 22px;
    margin: 10px auto 3px;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  }
  .left,.right{
    flex: 1;
    display: flex;
  }
  .service,.shop,.collect,.shopcart,.buy{
    flex: 1;
  }
  .shopcart,.buy{
    line-height: 60px;
  }
  .shopcart{
    background-color: yellow;
  }
  .buy{
    background-color: #ff8198;
  }
</style>
