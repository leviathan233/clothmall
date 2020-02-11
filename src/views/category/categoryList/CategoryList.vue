<template>
  <div id="categoryList">
    <scroll ref="clScroll" class="content">
      <div class="category-list-item"
           v-for="(category,index) in categories"
           :class="{active:listIndex === index}" @click="selectCategory(index,category.maitKey,category.miniWallkey)">{{category.title}}</div>
    </scroll>
  </div>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll";
  export default {
    name: "CategoryList",
    components:{
      Scroll
    },
    props:{
      categories:{
        type:Array,
        default(){
          return []
        }
      }
    },
    mounted() {
    },
    updated() {
      this.$refs.clScroll.scrollRefresh()
    },
    data(){
      return {
        listIndex:0
      }
    },
    methods:{
      selectCategory(index,maitKey,miniWallkey){
        this.listIndex = index
        const data = {
          index:index,
          maitKey:maitKey,
          miniWallkey:miniWallkey
        }
        console.log(data);
        this.$emit('getSubcategories',data)
      }
    }
  }
</script>
<style scoped>
  #categoryList{
    height: 100%;
    width: 100px;
    background-color: #f6f6f6;
    box-sizing: border-box;
  }
  .content{
    height: 100%;
  }
  .category-list-item{
    height:50px;
    line-height: 50px;
    text-align: center;
  }
  .active{
    border-left:3px solid #ff8198 ;
    color: #ff8198;
    background-color: white;
  }
</style>
