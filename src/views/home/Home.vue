<template>
  <div id="home">
    <NavBar class="home-nav"><template v-slot:center>首页</template><template v-slot:right></template></NavBar>
    <TabControl ref="tabControl2" :titles="['流行','新款','精选']" @tabClick="tabClick" class="fixed" v-show="isFixed"></TabControl>
    <Scroll ref="scroll" class="content"
            @scroll="contentScroll"
            @pullingUp="loadMore"
            :probeType="2"
            :pullUpLoad="true">
      <HomeSwiper :banners="banners" @swiperImgLoad="debounceSwiperImgLoaded"></HomeSwiper>
      <HomeRecommendView :recommends="recommends"></HomeRecommendView>
      <HomeFeatureView></HomeFeatureView>
      <TabControl ref="tabControl1" :titles="['流行','新款','精选']" @tabClick="tabClick"></TabControl>
      <GoodsList :goods="goods[tabType].list"></GoodsList>
    </Scroll>
    <BackTop @click.native="backTopClick" v-show="showBackTop"></BackTop>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";
  import Scroll from "components/common/scroll/Scroll";
  import BackTop from "components/content/backTop/BackTop";

  import HomeSwiper from "./homeSwiper/HomeSwiper";
  import HomeRecommendView from "./homeRecommendView/HomeRecommendView";
  import HomeFeatureView from "./homeFeatureView/HomeFeatureView";

  import {getHomeMultidata,getHomeGoods} from "network/home";
  import {debounce} from "common/util";

  export default {
    name: "Home",
    components:{
      NavBar,
      HomeSwiper,
      HomeRecommendView,
      HomeFeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    data(){
      return {
        banners:[],//轮播图数据
        recommends:[],//推荐列表数据
        goods:{//商品数据
          pop:{page:0,list:[]},
          new:{page:0,list:[]},
          sell:{page:0,list:[]}
        },
        tabType:'pop',//tabControl类型
        showBackTop:false,//是否显示回到顶部button
        tabControlOffsetTop:0,//tabControl距离顶部的高度
        isFixed:false,
        saveY:0,
        refreshFunc:null
      }
    },
    created() {
      //获取封装的网络请求的数据
      this.getHomeMultidata(),
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    mounted() {
      //加载完图片之后refresh刷新Better scroll的高度
      const refresh = debounce(this.$refs.scroll.scrollRefresh,50)
      this.refreshFunc = ()=>{
        refresh()
      }
      this.$bus.$on('imgLoad',this.refreshFunc)
    },
    updated() {
    //   this.scroll = new BScroll('#home',{
    //     probeType:3,
    //     scrollY: true,
    //     pullUpLoad: true
    //   })
    //   this.scroll.on('Pullup')
    //   this.$refs.scroll.scroll.refresh()
      // 获取tabControl距离顶部的高度
      // this.tabControlOffsetTop = this.$refs.tabControl.$el.offestTop
      // console.log(this.$refs.tabControl.offestTop);
    },
    activated() {
      this.$refs.scroll.scrollRefresh()
      // this.$refs.scroll.scrollToTop(0,this.saveY,0)
    },
    deactivated(){
      //保存离开时的Y值
      // this.saveY = this.$refs.scroll.getY()
      this.$bus.$off("imgLoad",this.refreshFunc)
    },
    methods:{
       /**
        *  事件监听
        */
      //监听tabControl的点击切换tabClick类型
      tabClick(index){
        console.log(index);
        switch (index) {
          case 0:this.tabType = 'pop'
                break;
          case 1:this.tabType = 'new'
                break;
          case 2:this.tabType = 'sell'
                break;
        }
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
      },
      //监听回到顶部btn
      backTopClick(){
        this.$refs.scroll.scrollToTop(0,0)
      },
      //监听回到顶部btn是否显示
      contentScroll(position){
        // console.log(position)
        this.showBackTop = (-position.y) > 1000
        this.isFixed = (-position.y) > this.tabControlOffsetTop
      },
      //上拉加载更多
      loadMore(){
        this.getHomeGoods(this.tabType)
        this.$refs.scroll.pullUpFinish()
      },
      //监听轮播图加载完成计算tabControl的高度
      debounceSwiperImgLoaded(){
        this.tabControlOffsetTop = this.$refs.tabControl1.$el.offsetTop
      },
      refresh(){
        console.log('aaa');
        this.$refs.scroll.scrollRefresh()
      },
      // refreshContent(){
      //   console.log('aaa');
      //   this.scroll && this.$refs.scroll.scrollRefresh()
      // },
      // pullUpFunc(){
      //   this.$refs.scroll.pullUpToUpload()
      // },
       /**
        * 网络请求
        */
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res =>{
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page = page
          // this.$refs.scroll.pullUpFinish()
        })
      },
    }
  }
</script>

<style scoped>
  #home{
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }
  .home-nav{
    /*position: fixed;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 0;*/
    z-index: 1;
    background-color: #ff8198;
    color: white;
  }
  .fixed{
    /*position: sticky;*/
    position: fixed;
    left:0;
    right: 0;
    top: 44px;
    z-index: 1;
    background-color: white;
    /*z-index: 9;*/
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
</style>
