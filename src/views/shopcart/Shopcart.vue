<template>
  <div id="shopCart">
    <NavBar><template v-slot:center>购物车</template></NavBar>
    <Scroll ref="shopcartScroll" class="content">
      <ShopItems></ShopItems>
    </Scroll>
    <ShopcartBar></ShopcartBar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import Scroll from "components/common/scroll/Scroll";
  import ShopItems from "./shopItems/ShopItems";
  import ShopcartBar from "./shopcartBar/ShopcartBar"
  export default {
    name: "Shopcart",
    components:{
      NavBar,
      ShopItems,
      Scroll,
      ShopcartBar
    },
  }
</script>

<style scoped>
  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  #shopCart{
    height: 100vh;
  }
</style>
