<template>
  <div class="goods-list-item" @click="itemClick">
    <img :src="itemImg" alt="" @load="imgLoad">
    <div class="goods-list-info">
      <p><span>{{item.title}}</span></p>
      <span class="price">￥{{item.price}}</span>
      <span class="collect">{{item.cfav}}</span>
    </div>
  </div>
</template>

<script>
    export default {
      name: "GoodsListItem",
      props:{
        item:{
          type:Object,
          default(){

          }
        },
        iid:{
          type:String,
          default(){
            return ''
          }
        }
      },
      computed:{
        itemImg(){
          return this.item.image ||this.item.img|| this.item.show.img
        }
      },
      methods:{
        imgLoad(){
          this.$bus.$emit('imgLoad')
        },
        itemClick(){
          this.$router.push('/detail/'+this.item.iid)
        }
      }
    }
</script>

<style scoped>
  .goods-list-item{
    flex: 1;
    padding-bottom: 10px;
    text-align: center;
    width: 48%;
    position: relative;
  }
  .goods-list-item img{
    width: 100%;
    border-radius: 5px;
  }
  .goods-list-info{
    font-size: 14px;
  }
  .goods-list-info p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-list-info .price{
    color: #ff8198;
    margin-right: 20px;
  }
  .goods-list-info .collect{
    position: relative;
  }
  .goods-list-info .collect::before{
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background:url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
