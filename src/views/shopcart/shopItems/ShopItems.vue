<template>
  <div class="shopItems">
    <ShopcartItem v-for="(item,i) in $store.state.cartList" :i="i"></ShopcartItem>
  </div>
</template>

<script>
  import ShopcartItem from "../shopcartItem/ShopcartItem";
  export default {
    name: "ShopItems",
    components:{
      ShopcartItem
    }
  }
</script>

<style scoped>

</style>
