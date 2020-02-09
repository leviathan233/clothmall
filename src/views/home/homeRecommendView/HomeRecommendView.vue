<template>
  <div id="recommends">
    <div class="recommend-item" v-for="recommend in recommends">
      <a :href="recommend.link">
        <img :src="recommend.image" alt="">
      </a>
      <div>{{recommend.title}}</div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "HomeRecommendView",
      props:{
        recommends:{
          type:Array,
          default(){
            return []
          }
        }
      }
    }
</script>

<style scoped>
  #recommends{
    display: flex;
    width:100%;
    text-align: center;
    font-size: 13px;
    padding: 10px 0px 20px;
    border-bottom: 10px solid #eee;
  }

  .recommend-item{
    flex: 1;
  }
  .recommend-item img{
    width: 65px;
    height: 65px;
    margin-bottom: 10px;
  }
</style>
