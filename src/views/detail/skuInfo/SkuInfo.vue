<template>
  <div id="skuInfo">
    <div class="skuInfo">
      <div class="close" @click="close">X</div>
      <div class="skuTop">
        <div class="skuImg">
          <img :src="skuImg" alt="">
        </div>
        <div class="skuTopInfo">
          <p class="skuPrice">{{skuPrice | priceFilter}}</p>
          <p class="skuStock">库存：{{skuStock}}</p>
        </div>
      </div>
      <div class="sku" v-for="prop in skuInfo.props" >
        <div class="prop">
          <h2>{{prop.label}}</h2>
          <div class="button" v-for="item in prop.list" :class="[{active:item.sizeId === sizeId},{active:item.styleId === styleId}]" @click="chooseSku({sizeId:item.sizeId,styleId:item.styleId})">{{item.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SkuInfo",
    filters:{
      priceFilter:function(value){
        return '￥'+(value/100).toFixed(2)
      }
    },
    props:{
      skuInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data(){
      return {
        sizeId:100,
        styleId:1
      }
    },
    computed:{
      skuItem(){
        if (Object.keys(this.skuInfo).length == 0)
          return '';
        const getSkuItem =  ()=>{
          for(let item of this.skuInfo.skus){
            if (item.sizeId == this.sizeId && item.styleId == this.styleId){
              return item
            }
          }
        }
        return getSkuItem()
      },
      skuImg(){
        return this.skuItem.img
      },
      skuPrice(){
        return this.skuItem.nowprice
      },
      skuStock(){
        return this.skuItem.stock
      },
    },
    methods:{
      chooseSku(id){
        if(id.sizeId != undefined)
        return this.sizeId = id.sizeId
        return this.styleId = id.styleId
      },
      close(){
        this.$emit('close')
      }
    }
  }
</script>

<style scoped>
  #skuInfo{
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: rgba(96,96,96,50%) ;
    bottom: 60px;
  }
  .skuInfo{
    position: fixed;
    background-color: white;
    height: 50%;
    width: 100%;
    bottom: 60px;
    padding: 20px;
  }
  .skuImg{
    width: 90px;
    height: 90px;
    overflow: hidden;
    display: inline-block;
  }
  .skuTopInfo{
    display: inline-block;
  }
  .skuTop img{
    width: 100%;
  }
  .button{
    display: inline-block;
    padding: 8px;
    margin: 5px;
    border: 1px solid lightgrey;
    border-radius: 10px;
  }
  .active{
    color: #ff8198;
    border-color: #ff8198;
  }
  .skuPrice{
    font-size: 20px;
    color: #ff8198;
  }
  .skuStock{

  }
  .close{
    position: absolute;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    font-size: 20px;
    top:5px;
    right: 5px;
    border: 1px solid darkgrey;
    border-radius: 50%;
  }
</style>
