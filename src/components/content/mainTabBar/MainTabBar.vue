<template>
  <TabBar>
    <TabBarItem link="/home">
      <template v-slot:tab-bar-item-img><img src="~assets/img/tabbar/home.svg" alt=""></template>
      <template v-slot:tab-bar-item-img-active><img src="~assets/img/tabbar/home_active.svg" alt=""></template>
      <template v-slot:tab-bar-item-name>首页</template>
    </TabBarItem>
    <TabBarItem link="/category">
      <template v-slot:tab-bar-item-img><img src="~assets/img/tabbar/category.svg" alt=""></template>
      <template v-slot:tab-bar-item-img-active><img src="~assets/img/tabbar/category_active.svg" alt=""></template>
      <template v-slot:tab-bar-item-name>分类</template>
    </TabBarItem>
    <TabBarItem link="/shoppingcart">
      <template v-slot:tab-bar-item-img><img src="~assets/img/tabbar/shopcart.svg" alt=""></template>
      <template v-slot:tab-bar-item-img-active><img src="~assets/img/tabbar/shopcart_active.svg" alt=""></template>
      <template v-slot:tab-bar-item-name>购物车</template>
    </TabBarItem>
    <TabBarItem link="/user">
      <template v-slot:tab-bar-item-img><img src="~assets/img/tabbar/profile.svg" alt=""></template>
      <template v-slot:tab-bar-item-img-active><img src="~assets/img/tabbar/profile_active.svg" alt=""></template>
      <template v-slot:tab-bar-item-name>我的</template>
    </TabBarItem>
  </TabBar>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar";
  import TabBarItem from "components/common/tabbar/TabBarItem";
  export default {
    name: "MainTabBar",
    components:{
      TabBar,TabBarItem
    }
  }
</script>

<style scoped>

</style>
