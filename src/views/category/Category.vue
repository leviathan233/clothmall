<template>
  <div id="category">
    <NavBar><template v-slot:center>商品分类</template></NavBar>
    <div class="content">
      <categoryList class="category-list" :categories="categories" @getSubcategories="getSubcategories"/>
      <Scroll ref="sclScroll" class="tab-content">
        <div class="subcontent">
        <SubcategoryList :subcategories="subcategories" @subcategoryImgLoad="subcategoryImgLoad"/>
        <TabControl :titles="['流行','新款','精选']" @tabClick="tabClick"/>
        <GoodsList :goods="goods[tabType]"></GoodsList>
        </div>
      </Scroll>
    </div>
  </div>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll";
  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";

  import CategoryList from "./categoryList/CategoryList";
  import SubcategoryList from "./subcategoryList/SubcategoryList";
  import CategoryDetailList from "./categoryDetailList/CategoryDetailList"

  import {getCategory,getSubcategory,getCategoryDetail} from "../../network/category";
  import {debounce} from "../../common/util";

  export default {
      name: "Category",
    components:{
      NavBar,
      CategoryList,
      Scroll,
      SubcategoryList,
      CategoryDetailList,
      TabControl,
      GoodsList
    },
    data(){
      return {
        categories:[],
        subcategories:[],
        refreshFunc:null,
        goods:{
          pop:[],
          new:[],
          sell:[]
        },
        tabType:'pop'
      }
    },
    mounted() {
      const refresh = debounce(this.$refs.sclScroll.scrollRefresh,200)
      this.refreshFunc = ()=>{
        refresh()
      }
      this.$bus.$on('imgLoad',this.refreshFunc)

    },
    created() {
      this.getCategory()
    },
    updated() {


    },
    deactivated() {
      this.$bus.$off('imgLoad',this.refreshFunc)
    },
    methods:{
      /**
       * 事件监听
       */
      getSubcategories(data){
        this.getSubcategory(data.maitKey)
        console.log(data.index);
        console.log(data.maitKey);
        console.log(data.miniWallkey);
        this.getCategoryDetail(data.miniWallkey,'pop')
        this.getCategoryDetail(data.miniWallkey,'new')
        this.getCategoryDetail(data.miniWallkey,'sell')
      },
      subcategoryImgLoad(){
        this.refreshFunc()
      },
      tabClick(index){
        switch (index) {
          case 0:this.tabType = 'pop'
                break;
          case 1:this.tabType = 'new'
                break;
          case 2:this.tabType = 'sell'
                break;
        }
      },
      /**
       * 网络请求
       */
      getCategory(){
        getCategory().then(res =>{
          this.categories = res.data.category.list
          this.getSubcategory(res.data.category.list[0].maitKey)
          this.getCategoryDetail(res.data.category.list[0].miniWallkey,'pop')
          this.getCategoryDetail(res.data.category.list[0].miniWallkey,'new')
          this.getCategoryDetail(res.data.category.list[0].miniWallkey,'sell')
        })
      },
      getSubcategory(maitKey){
        getSubcategory(maitKey).then(res => {
          this.subcategories = res.data.list
        })
      },
      getCategoryDetail(miniWallkey,type){
        getCategoryDetail(miniWallkey,type).then(res =>{
          this.goods[type] = res
        })
      }
    }
  }
</script>

<style scoped>
  #category{
    height: 100vh;
    /*position: relative;*/
  }
  .content{
    /*height: calc(100% - 93px);*/
    overflow: hidden;
    /*margin-top: 44px;*/
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    display: flex;
  }
  .category-list{
    display: inline-block;
    width: 100px;
  }
  .tab-content{
    display: inline-block;
    flex: 1;
    overflow: hidden;
    width: 100%;
  }
</style>
