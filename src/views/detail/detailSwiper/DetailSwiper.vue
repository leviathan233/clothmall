<template>
  <swiper v-if="topImages.length>1" class="swiper" :options="swiperOption">
    <swiper-slide class="swiper-slide" v-for="topImage in topImages"><img :src="topImage" alt="" @load="imgLoad()"></swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
  import {swiper,swiperSlide} from "vue-awesome-swiper"
    export default {
      name: "DetailSwiper",
      components:{
        swiper,
        swiperSlide
      },
      props:{
        topImages:{
          type:Array,
          default(){
            return []
          }
        }
      },
      data(){
        return {
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
          },
          isLoad:false
        }
      },
      methods:{
        imgLoad(){
          if (!this.isLoad){
            this.$emit('swiperImgLoad')
            this.isload = true
          }
        }
      }
    }
</script>

<style scoped>
  .swiper img{
    width: 100%;
  }
  .swiper{
    height: 300px;
  }
</style>
