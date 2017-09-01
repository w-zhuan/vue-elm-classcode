<template lang="html">
  <div class="countBtn">
    <i @click="reduce" class="icon iconfont icon-sub jian" v-show="food.count>0"></i>
     <span v-show="food.count>0">{{food.count}}</span>
    <i @click.stop="add($event)" class="icon iconfont icon-iconjia"></i>
  </div>
</template>

<script>
import Vue from "vue"
export default {
  props:{
    food:{
      type:Object,
    }
  },
  mounted(){

  },
  methods:{
    add(event){

      if(!this.food.count){
        Vue.set(this.food,'count',1)

      }else{
          this.food.count++
      }
      this.$emit('ball-event', event.target);
    },
    reduce(){
      this.food.count--
    }
  }
}
</script>

<style lang="less">
@import '../../static/less/var.less';
  .countBtn{
    i{
      color: #fff;
      border-radius: 100%;
      padding:4px 5px 5px;
      font-size: @base*20rem;
      background-color: @bc;
      margin-right:@base*10rem;
      text-align: center;
      line-height: @base*5rem;
    }
    span{
      color:#333;
    }
    .jian{
        background-color: #FFF;
        border: 1px solid @bc;
        color:@bc;
    }
}

</style>
