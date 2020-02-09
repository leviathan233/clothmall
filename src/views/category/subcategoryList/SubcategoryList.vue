<template>
  <div id="SubcategoryList">
    <div class="subcategory-list-item" v-for="subcategory in subcategories">
      <a :href="subcategory.link">
        <img :src="subcategory.image" alt="" @load="subcategoryImgLoad">
        <div>{{subcategory.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SubcategoryList",
    props:{
      subcategories:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods:{
      subcategoryImgLoad(){
        this.$emit('subcategoryImgLoad')
      }
    }
  }
</script>

<style scoped>
  #SubcategoryList{
    display: flex;
    flex-wrap: wrap;
  }
  .subcategory-list-item{
    text-align: center;
    width: 33%;
    justify-content: space-between;
  }
  .subcategory-list-item img{
    width: 60px;
    height: 60px;
  }
</style>
