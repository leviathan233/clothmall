<template>
    <div ref="wrapper">
      <div>
        <slot></slot>
      </div>
    </div>
</template>

<script>
  // import BScroll from "better-scroll"
  import BScroll from "@better-scroll/core"
  import PullUp from "@better-scroll/pull-up"
    export default {
        name: "Scroll",
      props:{
        probeType:{
          type:Number,
          default(){
            return 0
          }
        },
        pullUpLoad:{
          type:Boolean,
          default() {
            return false
          }
        }
      },
      data(){
          return {
            scroll:null,
          }
      },
      mounted() {
        BScroll.use(PullUp)
        this.scroll = new BScroll(this.$refs.wrapper,{
            probeType:this.probeType,
          pullUpLoad:this.pullUpLoad,
          click:true,
        })
        this.scroll.on('scroll',position => {
          this.$emit('scroll',position)
        })
        this.pullUpLoad && this.scroll.on('pullingUp',() => {
          this.$emit('pullingUp')
        })
      },
      methods:{
        scrollToTop(x,y,time=500){
          this.scroll &&  this.scroll.scrollTo(x,y,time)
        },
        scrollRefresh(){
          // console.log('aaa');
          this.scroll && this.scroll.refresh()
        },
        pullUpFinish(){
          this.scroll.finishPullUp()
        },
        getY(){
          this.scroll.on('scroll',position => {
            return position.y
          })
        }
      }
    }
</script>

<style scoped>

</style>
