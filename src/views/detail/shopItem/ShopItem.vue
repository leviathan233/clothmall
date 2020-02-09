<template>
    <div id="shopItem">
      <div class="shop-head">
        <img :src="shop.logo" alt="">
        <span class="title">{{shop.name}}</span>
      </div>
      <div class="shop-body">
        <div class="shop-goods-and-sells flex-1 text-center">
          <div class="sells flex-1"><p>{{shop.sells | sellsFilter}}</p><p>总销量</p></div>
          <div class="goods flex-1"><p>{{shop.goodsCount}}</p><p>全部宝贝</p></div>
        </div>
        <div class="flex-1 shop-score">
          <table class="score-table">
            <tr v-for="score in shop.score">
              <td>{{score.name}}</td>
              <td class="score" :class="{'text-red':score.isBetter}">{{score.score}}</td>
              <td class="better" :class="{'bg-red':score.isBetter}"><span>{{score.isBetter ? '高':'低'}}</span></td>
            </tr>
          </table>
        </div>
      </div>
      <div class="shop-footer">
        <div class="goToShop">
          <span>进店逛逛</span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ShopItem",
      filters:{
        sellsFilter: function (value){
          if(value<10000)
            return value
          return (value/10000).toFixed(1) + '万'
        }
      },
      props:{
          shop:{
            type:Object,
            default(){
              return {

              }
            }
          }
      }
    }
</script>

<style scoped>
  #shopItem{
    border-bottom: 3px solid darkgrey;
  }
  .shop-head{
    height: 40px;
    line-height: 40px;
    margin: 20px;
    display: flex;
  }
  .shop-head img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid darkgrey;
  }
  .shop-head .title{
    vertical-align: center;
    font-size: 14px;
    margin-left:12px ;
  }
  .shop-body{
    display: flex;
    align-items: center;
  }
  .shop-goods-and-sells{
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    border-right:1px solid lightgrey;
  }
  .score-table{
    margin-left: 30px;
    color: black;
    font-size: 14px;
  }
  .score-table td{
    padding: 5px;
  }
  .score{
    color: green;
  }
  .better span{
    background-color: green;
    color: white;
  }
  .flex-1{
    flex: 1;
  }
  .text-center{
    text-align: center;
  }
  .text-red{
    color: red;
  }
  .bg-red span{
    background-color: red;
  }
  .shop-footer{
    text-align: center;
  }
  .goToShop{
    line-height: 35px;
    margin: 10px;
    display: inline-block;
    width: 150px;
    height: 35px;
    font-size: 14px;
    border-radius: 9px;
    background-color: lightgrey;
    color: dimgrey;
  }
</style>
