<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <MainTabBar></MainTabBar>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/mainTabBar/MainTabBar'
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: 'app',
    components: {
      MainTabBar,
    }
  }
</script>

<style>
  @import './assets/css/base.css';
  MainTabBar{
    z-index: 2;
  }
</style>
