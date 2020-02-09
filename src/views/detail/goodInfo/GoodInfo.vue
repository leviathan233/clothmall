<template>
    <div id="goodInfo">
      <div class="desc">
        <div class="desc-header"></div>
        <div class="desc-content">{{detailInfo.desc}}</div>
        <div class="desc-footer"></div>
      </div>
      <div class="detail-img" v-for="img in detailInfo.detailImage">
        <div class="detail-key">
          {{img.key}}
        </div>
        <div class="detail-list">
          <img :src="photo" alt="" v-for="photo in img.list" @load="imgLoad()">
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "GoodInfo",
      props:{
        detailInfo:{
          type:Object,
          default(){
            return {

            }
          }
        }
      },
      methods:{
        imgLoad(){
          this.$emit('imgLoad')
        }
      }
    }
</script>

<style scoped>
  #goodInfo{
    border-bottom: 3px solid lightgrey;
  }
  .desc{
    padding:20px 20px;
  }
  .desc-header{
    width: 100px;
    height: 1px;
    background-color: darkgrey;
    position: relative;
  }
  .desc-content{
    margin: 20px 10px;
  }
  .desc-footer{
    float: right;
    width: 100px;
    height: 1px;
    background-color: darkgrey;
    position: relative;
  }
  .desc .desc-header::before,.desc .desc-footer::after{
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: black;
    bottom: 0;
  }
  .desc .desc-header::before{
    top:0;
  }
  .desc .desc-footer::after{
    right:0;
  }
  .detail-img img{
    width: 100%;
  }
</style>
