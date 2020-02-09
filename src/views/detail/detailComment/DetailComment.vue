<template>
  <div id="detailComment">
    <div class="comment-header">
      <span>用户评价({{rate.cRate|rateFilter}})</span>
      <span class="more">更多&nbsp;></span>
    </div>
    <div class="comment-body">
      <div class="comment-list" v-for="comment in rate.list">
        <div class="user">
          <div><img :src="comment.user.avatar" alt=""></div>
          <div>{{comment.user.uname}}</div>
        </div>
        <div class="comment-content">
          {{comment.content}}
        </div>
        <div class="comment-good">
          {{comment.created | formatTimeToData}}
          {{comment.style}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {formatTime} from "common/util";
  export default {
    name: "DetailComment",
    filters:{
      rateFilter(value){
        if(value>999) return '999+'
        if (value>99) return '99+'
        return value
      },
      formatTimeToData(value){
        return formatTime(Number(value))
      }
    },
    created() {

    },
    props:{
      rate:{
        type:Object,
        default(){
          {}
        }
      }
    }
  }
</script>

<style scoped>
  #detailComment{
    padding-bottom: 15px;
    border-bottom: 5px solid lightgrey;
  }
  .comment-header{
    margin: 0 20px;
    padding: 10px 0;
  }
  .comment-list{
    padding-top: 15px;
    margin: 0;
    border-top: 1px solid lightgrey;
  }
  .more{
    float: right;
    font-size: 14px;
  }
  .user img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .user div{
    line-height: 40px;
    height: 40px;
    display: inline-block;
    vertical-align: middle;
    font-size: 15px;
    margin-right: 10px;
    color: black;
    /*padding:10px 0;*/
  }
  .comment-content{
    margin: 10px;
    font-size: 13px;
    color: grey;
  }
  .comment-good{
    font-size: 14px;
    color: darkgrey;
  }
  .comment-list{
    margin: 10px 20px;
  }
</style>
