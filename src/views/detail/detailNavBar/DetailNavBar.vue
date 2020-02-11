<template>
    <div id="detail-nav-bar">
      <NavBar>
        <template v-slot:left>
          <div @click="backClick()">
            <img src="~assets/img/common/back.svg" alt="">
          </div>
        </template>
        <template v-slot:center>
          <div class="titles">
            <div v-for="(title,index) in titles" class="title" :class="{active:index === currentIndex}" @click="navClick(index)">{{title}}</div>
          </div>
        </template>
      </NavBar>
    </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
    export default {
      name: "DetailNavBar",
      components:{
        NavBar,
      },
      props:{
        currentIndex:{
          type:Number,
          default(){
            return 0
          }
        },
      },
      data(){
        return {
          titles:['商品','参数','评论','推荐'],
        }
      },
      methods:{
        navClick(index){
          this.$emit('navClick',index)
        },
        backClick(){
          this.$router.back()
        }
      }
    }
</script>

<style scoped>
  .titles{
    display: flex;
    font-size: 14px;
  }
  .title{
    flex: 1;
  }
  .active{
    color: #ff8198;
  }
  #detail-nav-bar img {
    margin-top: 10px;
  }
</style>
