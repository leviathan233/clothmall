<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>
  #tab-bar{
    /*弹性布局*/
    display: flex;
    background-color: #f6f6f6;
    /*放在底部*/
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0 -3px 10px rgba(100,100,100,0.2);
  }
</style>
