<template>
  <div class="tab-control">
    <div  v-for="(title,index) in titles" :class="{active:index === currentIndex}" @click="tabClick(index)">
      <span>{{title}}</span>
    </div>
  </div>
</template>

<script>
    export default {
      name: "TabControl",
      props:{
        titles:{
          type:Array,
          default(){
            return []
          }
        }
      },
      data(){
        return {
          currentIndex:0
        }
      },
      methods:{
        tabClick(index){
          this.currentIndex = index
          this.$emit('tabClick',index)
        }
      }
    }
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
  }
  .tab-control span{
    padding: 5px;
  }
  .tab-control div{
    flex: 1;
  }
  .active{
    color: #ff8198;
  }
  .active span{
    border-bottom: 2px solid #ff8198;
  }
</style>
