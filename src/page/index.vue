<template>
  <div class="">

  <!-- content goes here -->

    <div class="index-wrapper">
      <scroller ref="myScroller" :on-infinite="infinite">
        <div class="index-header">
            <div class="position-box">
                <div class="orientatio">
                    <i class="icon iconfont icon-dingwei"></i>
                    <span>北京昌平马池口...</span>
                </div>
                <div class="weather-box">
                    <span>阴</span>
                    <i class="icon iconfont icon-yinbaitian"></i>
                </div>
            </div>
            <div class="saerch">
              <input type="text" placeholder="" value="搜索商家、商品">
            </div>
            <div class="swiper-box">
                <div class="swiper-container" id="swiper1">
                  <div class="swiper-wrapper">
                      <div class="swiper-slide"><a href="javascript:;">黄焖鸡</a></div>
                      <div class="swiper-slide"><a href="javascript:;">炸鸡</a></div>
                      <div class="swiper-slide"><a href="javascript:;">肉夹馍</a></div>
                      <div class="swiper-slide"><a href="javascript:;">水果立减20元</a></div>
                      <div class="swiper-slide"><a href="javascript:;">我的菜</a></div>
                      <div class="swiper-slide"><a href="javascript:;">鱼</a></div>
                      <div class="swiper-slide"><a href="javascript:;">烤肉</a></div>
                      <div class="swiper-slide"><a href="javascript:;">水果捞</a></div>
                      <div class="swiper-slide"><a href="javascript:;">久久丫</a></div>
                      <div class="swiper-slide"><a href="javascript:;">桃子</a></div>
                  </div>
                  <!-- Add Scrollbar -->
                  <div class="swiper-scrollbar"></div>
                </div>
            </div>
        </div>
        <div class="index-main">
            <div class="swiper-container " id="swiper2">
              <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="img in swiperimg" >
                    <img :src="img.images" alt="" />
                    <p>{{img.title}}</p>
                  </div>

              </div>
              <div class="swiper-pagination">
              </div>
            </div>
        </div>
        <div class="index-shop">
            <h3>热卖商家</h3>
            <ul>
              <router-link :to="{path:'/shop/'+index }" tag="li" v-for = "(s,index) in sellers">

                <img :src="s.avatar" alt="">
                <div class="shop-box">
                  <div class="title">
                      {{s.name}}
                  </div>
                  <div class="star-box">
                      月售{{s.sellCount}}单
                  </div>
                  <div class="dilivery-box">
                      {{s.minPrice}}元起送 / 配送费 {{s.deliveryPrice}} / ￥{{s.rankRate}}/人
                  </div>
                  <div class="new-box">
                      <div class="">
                        <span style="background-color:#70BC46;border-radius:2px;">新</span>新用户立减15元
                      </div>
                      <div class="">
                        <span style="background-color:#F07373;border-radius:2px;">折</span>
                      </div>
                  </div>
                </div>
              </router-link>
            </ul>
        </div>
      </scroller>
    </div>

    <footer-bar></footer-bar>
  </div>
</template>

<script>

import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import footerBar from "@/components/footerBar"
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)

export default {
  data() {
		return {
			// movieList: [],
      "swiperimg" :[
      {"images":"http://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
        "title":"美食"
      },{"images":"http://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
        "title":"甜品饮品"
      },{"images":"http://fuss10.elemecdn.com/0/da/f42235e6929a5cb0e7013115ce78djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
        "title":"商超便利"
      },{"images":"http://fuss10.elemecdn.com/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
        "title":"预订早餐"
      },{"images":"http://fuss10.elemecdn.com/c/db/d20d49e5029281b9b73db1c5ec6f9jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
        "title":"果蔬生鲜"
      },{"images":"http://fuss10.elemecdn.com/a/fa/d41b04d520d445dc5de42dae9a384jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
        "title":"新店尝鲜"
      },{"images":"http://fuss10.elemecdn.com/3/84/8e031bf7b3c036b4ec19edff16e46jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
        "title":"准时达"
      },{"images":"http://fuss10.elemecdn.com/e/89/185f7259ebda19e16123884a60ef2jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
        "title":"晚餐"
      },{"images":"http://fuss10.elemecdn.com/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
        "title":"薯条汉堡"
      },{"images":"http://fuss10.elemecdn.com/2/17/244241b514affc0f12f4168cf6628jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
        "title":"包子粥店"
      },{"images":"http://fuss10.elemecdn.com/8/83/171fd98b85dee3b3f4243b7459b48jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
        "title":"鲜花蛋糕"
      },{"images":"http://fuss10.elemecdn.com/3/c7/a9ef469a12e7a596b559145b87f09jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
        "title":"麻辣烫"
      },{"images":"http://fuss10.elemecdn.com/a/8a/ec21096d528b7cfd23cdd894f01c6jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
        "title":"地方菜系"
      },{"images":"http://fuss10.elemecdn.com/7/b6/235761e50d391445f021922b71789jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
        "title":"披萨意面"
      },{"images":"http://fuss10.elemecdn.com/6/d2/de0683a49a0655c728b70fdb344d5jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
        "title":"异国料理"
      }
    ],
      noData:false,
			sellers: [],
      totalSeller:{}


		}
	},
  components:{
    footerBar,
    VueAwesomeSwiper
  },
  //初始化munted
  mounted(){
    var swiper1 = new Swiper('#swiper1', {
          scrollbar: '.swiper-scrollbar',
          slidesPerView: 'auto',
           spaceBetween: 10,

      })
      var swiper2 = new Swiper('#swiper2', {
            direction : 'horizontal',
            pagination : '.swiper-pagination',
            slidesPerView : 4,
            slidesPerColumn:2,
            slidesPerGroup:8
        })

        this.axios.get("/api/seller").then((res)=>{
          if(res.data.erron==0){
            this.totalSeller = res.data.data
            let temp = this.totalSeller.concat();
            this.sellers = temp.splice(0,5)

          }

        })
        this.axios.get("/api/swiperimg").then((res)=>{
          if(res.data.errno==0){
            this.swiperimg = res.data.data

          }

        })
  },
  methods:{
    infinite(done) {
      let self = this;
      if (this.noData) {
        setTimeout(() => {
          self.$refs.myScroller.finishInfinite(2);
        })
        return
      }
      let start = this.sellers.length;
      setTimeout(() => {
        let total = self.totalSeller.concat(0);
        let temp = total.splice(start, 5);
        if (temp.length == 0) {
          self.noData = true;
        }
        this.sellers = this.sellers.concat(temp);
        console.log(self.$refs.myScroller, 'myscroller');
        self.$refs.myScroller.resize();
        done();
      }, 1500)
    },
  }

}
</script>

<style lang="less">
@import "../../static/less/var.less";
  .index-wrapper{
    position: absolute;
    left: 0;
    top: 0;
    bottom: @base*100rem;
    width: 100%;
    .index-header{
      padding:@base*20rem @base*28rem;
      height: @base*204rem;
      background-color:@zbc;
      .position-box{
        height: @base*60rem;

        display: flex;
        justify-content: space-between;

        color: #fff;
        .orientatio{
          width: @base*416rem;
          height: @base*62rem;
          line-height: @base*62rem;
          display: flex;
          font-size: @base*38rem;
          i{
            font-size: @base*32rem;
          }

        }
        .weather-box{
          width: @base*120rem;
          height: @base*62rem;
          display: flex;
          i{
            font-size: @base*44rem
          }
          span{
            font-size:@base*20rem;
          }
        }
      }
      .saerch{
        height: @base*70rem;
        border-radius: @base*40rem;
        background-color: #fff;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: @base*15rem 0;
        font-size: @base*30rem;
      }
      .swiper-box{
        width: 100%;
        #swiper1{
          width: 100%;
          .swiper-wrapper{
            width: 100%;

            display: flex;
            .swiper-slide{
              width: auto !important;
              a{
                color:#fff;
                font-weight: 400;
              }
            }
          }
        }
      }
    }
    .index-main{
      background-color: #fff;


      height: @base*354rem;
      #swiper2{
      height: @base*354rem !important;
      }
      .swiper-wrapper{
      height: @base*354rem !important;
        .swiper-slide{
            margin-top: @base*22rem;
            height: @base*124rem;
            width: 25%;
            text-align: center;
            img{
              width: 40%;
            }

        }
      }

      .swiper-pagination-bullet{
        position: relative;

      } .swiper-pagination-bullet-active{
        background-color: @zbc;
      }
    }
    .index-content{
      height: 500px;
    }
    .index-shop{

      margin-top:@base*16rem;
      background-color: #fff;
      height: 100%;
      h3{
        padding-top: @base*20rem;
        margin-left: @base*20rem;
      }
      ul{
          margin-top: @base*10rem;
        li{

          border-top: 1px solid @bc1;
          display: flex;
          img{
            margin: @base*30rem @base*20rem;
            width:@base*120rem;
            height: @base*120rem;
            border-radius: 5px;

          }
          .shop-box{
            height: @base*214rem;
            width: @base*570rem;

            padding: @base*30rem @base*20rem;
            padding-left: 0;
            .title{
                font-family: "黑体";
              font-size: @base*35rem;
              font-weight: 500;
              display: flex;
              justify-content: space-between;
              margin-bottom: @base*10rem;

            }
          .dilivery-box,.star-box{
                font-family: "黑体";
                font-weight: 500;
                font-size: @base*26rem;
                margin-bottom: @base*10rem;
                color:#666;
                letter-spacing:-1spx;
            }
            .new-box{
              font-weight: 700;
              font-size: @base*22rem;
              color:#939393;
              span{
                color: #333;
                font-weight: 400;
              }
            }
          }
        }
      }

    }
  }
</style>
