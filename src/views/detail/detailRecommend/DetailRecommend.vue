<template>
  <div id="detailRecommend">
    <div class="title">
      热门推荐
    </div>
    <GoodsList :goods="goods"></GoodsList>
  </div>
</template>

<script>
  import GoodsList from "components/content/goods/GoodsList";
    export default {
        name: "DetailRecommend",
      components:{
          GoodsList,
      },
      props:{
        goods:{
          type:Array,
          default(){
            return []
          }
        }
      }
    }
</script>

<style scoped>

</style>
