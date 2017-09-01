<template lang="html">
  <div class="shop-wrapper">
    <div class="shop-header">
      <div class="position">
        <img :src="seller.avatar" alt="">
      </div>
      <div class="shop-header-back">
        <router-link to="/index" class="icon iconfont icon-back" tag="i"></router-link>
      </div>
      <div class="shop-box">
        <img :src="seller.avatar" alt="">
        <div class="shop-news">
          <h3>{{seller.name}}</h3>
          <div class="title">
            <div class="">
              商家配送 / {{seller.deliveryTime}}分钟送达 / 配送费￥{{seller.deliveryPrice}}
            </div><i class="icon iconfont icon-arrow-right"></i>
          </div>
          <div class="notice">
              公告:欢迎观临，现在用餐高峰期，请尽快下单
          </div>
        </div>
      </div>
      <div class="shop-notice-news">
        <div class="">
          <span>新</span>新用户下单立减17元(不与其他活动同享)
        </div> <span>2个活动</span>
      </div>
    </div>
    <div class="shop-main">
      <ul class="shop-main-top">
        <li><span class="li">商家</span></li>
        <li><span>评价</span></li>
      </ul>
    </div>

    <menu-view></menu-view>

  </div>
</template>

<script>

import menuView from '@/components/menuView'
export default {
  components:{
    menuView
  },
  data(){
    return {
      seller:{
        type:Array
      }
    }
  },
  mounted(){
    let idx = this.$route.params.idx;
    this.axios.get('/api/seller').then((res)=>{
        let sellers = res.data.data;
        this.seller = sellers[idx]
      })
  },
  methods:{
    _initScroll(){

    }
  }
}
</script>

<style lang="less">
@import '../../static/less/var.less';
.shop-wrapper{
  .shop-header{
    height:@base*262rem;
    // background-color: rgba(17,27,37,0.5);

    padding: 0 @base*10rem ;
    position: relative;
    .position{
      position: absolute;
      z-index: -2;
      top:0;
      left: 0;
      width: 100%;
      height: 100%;
      filter: blur(20px);
      img{
        width: 100%;
        height: 100%;

      }
    }
    .shop-header-back{
      padding: @base*4rem @base*10rem;
      i{
        font-size: @base*50rem;
        color: #fff;
      }
    }
    .shop-box{
      display: flex;

      img{
        margin: @base*10rem @base*10rem;
        width:@base*128rem;
        height: @base*128rem;
        border-radius: 5px;
        border: 1px solid #fff;
      }
      .shop-news{
        padding-top: @base*1rem;
        color:#fff;
        line-height: @base*40rem;
        .title{
          font-weight: 500;
          font-size: @base*22rem;
          display: flex;justify-content: space-between;
          i{
            margin-left: @base*180rem;
          }
        }
        .notice{
          font-size: @base*22rem;
        }
      }

    }
    .shop-notice-news{
      margin:0 @base*10rem;

      display: flex;
      justify-content: space-between;
      font-size: @base*22rem;  color:#fff;
      span{

      }
    }
  }
  .shop-main{

    .shop-main-top{
      width: 100%;
      display: flex;

      li{
        background-color: #fff;
        width: 50%;
        height: @base*90rem;
        text-align: center;
        line-height: @base*90rem;

        color: @fontc;
        span{
          &.li{
            color:#3190e8;
            text-decoration: underline;
          }
        }
      }
    }

  }
}
</style>
