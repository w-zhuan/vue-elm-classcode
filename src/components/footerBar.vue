<template lang="html">
  <div class="footer-wrapper">
    <router-link to="/index" active-class="act" tag="div" class="item">
      <i class="icon iconfont icon-changyonglogo40"></i>
      <span>外卖</span>
    </router-link>
    <router-link to="/discovery" active-class="act" tag="div" class="item">
      <i class="icon iconfont icon-faxian"></i>
      <span>发现</span>
    </router-link>
    <router-link to="/order" active-class="act" tag="div" class="item">
      <i class="icon iconfont icon-dingdan"></i>
      <span>订单</span>
    </router-link>
    <router-link to="/mine" active-class="act" tag="div" class="item">
      <i class="icon iconfont icon-wode"></i>
      <span>我的</span>
    </router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
@import "../../static/less/var.less";
.footer-wrapper{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: @base*100rem;
  background-color:#fff;
  border-top: 1px solid @bc1;
  display: flex;
  .item{
    width: 25%;
    height: 100%;
    text-align: center;
    display:flex;
    flex-direction: column;
    padding-top: @base*20rem;
    color:@fontc;
    i{
      font-size: @base*40rem  ;
    }
    span{
      font-size: @base*26rem;
    }
    &.act{

      color: @zbc;
    
    }
  }
}
</style>
