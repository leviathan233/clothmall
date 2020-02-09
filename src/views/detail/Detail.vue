<template>
  <div id="detail">
    <DetailNavBar @navClick="navClick" :current-index="currentIndex"/>
    <Scroll ref="scroll" class="content"
      :probeType="3"
    @scroll="scroll">
      <DetailSwiper :top-images="itemInfo.topImages" @swiperImgLoad="swiperImgLoad" />
      <DetailItem :goods="goods" />
      <ShopItem :shop="shop" />
      <GoodInfo :detail-info="detailInfo" @imgLoad="imgLoad()" />
      <DetailParams ref="detailParams" :itemParams="itemParams" />
      <DetailComment ref="detailComment" :rate="rate" />
      <DetailRecommend ref="detailRecommend" :goods="recommend.data.list" v-if="Object.keys(recommend).length!=0" />
    </Scroll>
    <BackTop @click.native="backTop()" v-show="showBackTop"/>
    <DetailTabBar />
  </div>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll";
  import BackTop from "components/content/backTop/BackTop";

  import DetailNavBar from "./detailNavBar/DetailNavBar";
  import DetailSwiper from "./detailSwiper/DetailSwiper";
  import DetailItem from "./detailItem/DetailItem";
  import ShopItem from "./shopItem/ShopItem";
  import GoodInfo from "./goodInfo/GoodInfo";
  import DetailParams from "./detailParams/DetailParams";
  import DetailComment from "./detailComment/DetailComment";
  import DetailRecommend from "./detailRecommend/DetailRecommend";
  import DetailTabBar from "./detailTabBar/DetailTabBar";

  import {getDetail ,getRecommend, Goods , Shop} from "network/detail";

  import {debounce} from "common/util.js"

  export default {
        name: "Detail",
      components:{
        Scroll,
        BackTop,
        DetailItem,
        DetailNavBar,
        DetailSwiper,
        ShopItem,
        GoodInfo,
        DetailParams,
        DetailComment,
        DetailRecommend,
        DetailTabBar
      },
      data(){
          return {
            iid:'',
            showBackTop:false,
            itemInfo:{},
            goods:{},
            shop:{},
            detailInfo:{},
            itemParams:{},
            rate:{},
            recommend:{},
            allOffsetTop:{
              params:0,
              comment:0,
              recommend:0
            },
            navIndex:0,
            currentIndex:0
          }
      },
    created() {
      this.iid = this.$route.params.iid
      this.getDetail(this.iid)
      this.getRecommend()
    },
    mounted() {
      //加载完图片之后refresh刷新Better scroll的高度
      const refresh = debounce(this.$refs.scroll.scrollRefresh,50)
      this.$bus.$on('imgLoad',()=>{
        refresh()
        // this.$refs.scroll.scrollRefresh()
      })
    },
    updated() {
      this.$refs.detailParams || this.$refs.detailComment || this.$refs.detailRecommend || this._getOffsetTop()
    },
    methods:{
        /**
         * 事件监听
         */
        _getOffsetTop(){
          this.allOffsetTop.params = this.$refs.detailParams.$el.offsetTop
          this.allOffsetTop.comment = this.$refs.detailComment.$el.offsetTop
          this.allOffsetTop.recommend = this.$refs.detailRecommend.$el.offsetTop
        },
        navClick(index){
          this.navIndex = index
          if(index == 0) return this.$refs.scroll.scrollToTop(0,0)
          if(index == 1) return this.$refs.scroll.scrollToTop(0,-this.allOffsetTop.params)
          if(index == 2) return this.$refs.scroll.scrollToTop(0,-this.allOffsetTop.comment)
          if(index == 3) return this.$refs.scroll.scrollToTop(0,-this.allOffsetTop.recommend)
        },
        swiperImgLoad(){
          this.$refs.scroll.scrollRefresh()
        },
        imgLoad(){
          debounce(this.$refs.scroll.scrollRefresh(),100)
        },

        backTop(){
          this.$refs.scroll.scrollToTop(0,0)
        },
        scroll(position){
          this.showBackTop = (-position.y) >1000
          if ((-position.y)<this.allOffsetTop.params){
            this.currentIndex = 0
          }else if ((-position.y)<this.allOffsetTop.comment){
            this.currentIndex = 1
          }else if ((-position.y)<this.allOffsetTop.recommend){
            this.currentIndex = 2
          }else{
            this.currentIndex = 3
          }
        },
        /**
         *  网络请求
         */
        getDetail(iid){
          getDetail(iid).then(res => {
            console.log(res);
            this.itemInfo = res.result.itemInfo
            this.goods = new Goods(res.result.itemInfo,res.result.columns,res.result.shopInfo.services)
            this.shop = new Shop(res.result.shopInfo)
            this.detailInfo = res.result.detailInfo
            this.itemParams = res.result.itemParams
            this.rate = res.result.rate
          })
        },
        getRecommend(){
          getRecommend().then(res =>{
            console.log(res);
            this.recommend = res
          })
        }
      }
    }
</script>

<style scoped>
  #detail{
    height: 100vh;
    position: relative;
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
  }
  /*DetailTabBar{*/
  /*  z-index: 1;*/
  /*}*/
</style>
