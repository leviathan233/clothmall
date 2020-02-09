<template>
  <swiper v-if="banners.length>1" class="swiper" :options="swiperOption">
    <swiper-slide class="swiper-slide" v-for="banner in banners"><img :src="banner.image" alt="" @load="imgLoad()"></swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
    <!-- 左右箭头 -->
    <div class="swiper-button-prev darkgrey" slot="button-prev"></div>
    <div class="swiper-button-next darkgrey" slot="button-next"></div>
  </swiper>
</template>

<script>
  import {swiper,swiperSlide} from "vue-awesome-swiper"
  export default {
    name: "homeSwiper5",
    components:{
      swiper,
      swiperSlide
    },
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        isLoad:false,
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          //设置点击箭头
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          //自动轮播
          autoplay: true,
          //开启循环模式
          loop: true,
          // width:375,

        }
      }
    },
    methods:{
      imgLoad(){
        if (!this.isLoad){
          this.$emit('swiperImgLoad')
          this.isLoad = true
        }
      }
    }
  }
</script>

<style scoped>
  .swiper img{
    width: 100%;
  }
  .darkgrey{
    color: darkgrey;
  }
  .pink{
    color: #ff8198;
  }
</style>
