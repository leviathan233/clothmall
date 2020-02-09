<template>
  <div id="detailParams">
    <div class="size">
      <table v-if="Object.keys(itemParams).length != 0">
        <tr v-for="size in itemParams.rule.tables[0]">
          <td v-for="item in size">{{item}}</td>
        </tr>
      </table>
    </div>
    <div class="params">
      <table v-if="Object.keys(itemParams).length != 0">
        <tr v-for="set in itemParams.info.set">
          <td class="params-title">{{set.key}}</td>
          <td class="params-text">{{set.value}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailParams",
    props:{
      itemParams:{
        type:Object,
        default(){

        }
      }
    },
    data(){
      return {

      }
    }
  }
</script>

<style scoped>

  .size,.params{
    width: 100%;
    margin: 20px 10px;
  }
  table{
    border-collapse:collapse;
    width: 100%;
  }
  td{
    border-bottom: 1px solid lightgrey ;
    padding: 10px;
  }
  .params-text{
    color: #ff8198;
  }
  #detailParams{
    border-bottom: 3px solid lightgrey;
    font-size: 14px;
  }
</style>
