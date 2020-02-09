<template>
    <div id="detail-item">
      <div class="title">{{goods.title}}</div>
      <div class="price">
        <span class="nowPrice">{{goods.price}}</span>
        <span class="oldPrice" v-if="goods.oldPrice">{{goods.oldPrice}}</span>
        <span class="discount" :style="{backgroundColor:goods.discountBgColor}" v-if="goods.oldPrice">{{goods.discountDesc}}</span>
      </div>
      <div class="otherInfo">
        <div class="sales">{{goods.sales}}</div>
        <div class="collects">{{goods.collects}}</div>
        <div class="delivery">{{goods.delivery}}</div>
      </div>
      <div class="services">
        <div v-for="service in goods.services" >
          <img :src="service.icon" alt="" v-if="service.icon">
          {{service.name}}
        </div>
      </div>
    </div>
</template>
<script>
    export default {
        name: "DetailItem",
      props:{
        goods:{
          type:Object,
          default(){
            return {}
          }
        },
      },
      data(){
          return {

          }
      }

    }
</script>

<style scoped>
  #detail-item{
    border-bottom: 3px solid darkgrey;
  }
  .title{
    margin: 15px 10px;
    font-weight: 500 ;
    color: black;
  }
  .discount{
    font-size: 15px;
    color: white;
    padding: 1px 2px;
    border-radius: 3px;
    margin-left: 4px;
  }
  .price{
    margin: 10px 10px;
  }
  .nowPrice{
    font-size: 24px;
    color: #ff8198;
  }
  .oldPrice{
    font-size: 14px;
    color: darkgrey;
    text-decoration: line-through;
  }
  .otherInfo{
    color: darkgrey;
    margin: 20px 10px 0px;
    padding-bottom: 3px;
    border-bottom: 1px solid lightgrey;
    display: flex;
    text-align: center;
    font-size: 14px;
    justify-content: space-between;
  }
  .services img{
    width: 11px;
    height: 11px;
  }
  .services{
    padding:20px 10px ;
    font-size: 12px;
    display: flex;
    text-align: center;
    justify-content: space-between;
  }

</style>
