<template>
  <div class="shopcartItem">
    <div class="img">
      <img :src="$store.state.cartList[i].data.sku.img" alt="" @load="shopImgLoad">
    </div>
    <div class="info">
      <div class="title">{{$store.state.cartList[i].data.result.itemInfo.title}}</div>
      <div class="sku">已选："{{$store.state.cartList[i].data.sku.size}}","{{$store.state.cartList[i].data.sku.style}}"</div>
      <div class="price">{{$store.state.cartList[i].data.sku.nowprice*$store.state.cartList[i].count | priceFilter}}</div>
    </div>
    <div class="count">
      <button @click="sub">-</button>
      <input type="number" class="countInput" v-model="$store.state.cartList[i].count">
      <button @click="add">+</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ShopcartItem",
    filters:{
      priceFilter:function(value){
        return '￥'+(value/100).toFixed(2)
      }
    },
    props:{
      i: Number
    },
    methods:{
      shopImgLoad(){
        this.$bus.$emit('shopImgLoad')
      },
      sub(){
        this.$store.commit('subCount',this.i)
      },
      add(){
        this.$store.commit('addCount',this.i)
      }
    }
  }
</script>

<style scoped>
  .img{
    height: 130px;
    width: 130px;
    overflow: hidden;
    display: inline-block;
  }
  .img img{
    width: 100%;
    display: inline-block;
    overflow: hidden;
  }
  .shopcartItem{
    height: 142px;
    width: 100%;
    border-bottom:1px solid #ff8198;
    padding: 6px 0px;
    margin: 0px 6px;
    display: flex;
    position: relative;
  }
  .info{
    flex: 1;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .title{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .countInput{
    width: 20px;
  }
  .count{
    position: absolute;
    right: 20px;
    bottom: 20px;
  }
</style>
