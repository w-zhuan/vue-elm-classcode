<template lang="html">
    <div class="shop-main-middle">
      <ul class="shop-main-left" ref="menuScroll">
        <div class="">
          <li v-for="(item,index) in goods" @click="scrollTo(index)" :class="{act:menuIndex===index}">
            {{item.name}}
          </li>
        </div>

      </ul>
      <div class="food-wrapper" ref="foodScroll">
        <div class="">


          <dl class="" v-for="foods in goods">
            <dt>{{foods.name}}</dt>
            <dd v-for="food in foods.foods">
              <img :src="food.icon" alt="">
              <div class="food-info">
                <h4>{{food.name}}</h4>
                <p class="desc" v-if="food.info">{{food.info.substr(0,10)+'...'}}</p>
                <p class="sales">月销{{food.sellCount}}份 好评率{{food.rating}}%</p>
                <p class="cost"><span>￥<span>{{food.price}}</span></span><count-btn @ball-event="ballEvent" :food="food"></count-btn></p>
              </div>
            </dd>
          </dl>
        </div>
      </div>
      <shop-cart ref="shopCart" :selectedFoods="selectedFoods"></shop-cart>

  </div>
</template>

<script>
import shopCart from '@/components/shopCat'
import BScroll from 'better-scroll';
import countBtn from '@/components/countBtn'
countBtn
export default {
  components:{
    shopCart,
    BScroll,
    countBtn
  },
  data(){
    return{
      scrollY:0,
      Heights:[],
      goods:{
        type:Array
      }
    }
  },
	computed:{
    menuIndex() {
			for (let i = 0; i < this.Heights.length; i++) {
				let now = this.Heights[i];
				let next = this.Heights[i + 1];
				if (now <= this.scrollY && this.scrollY < next) {
					return i;
				} else if (!next) {
					return i;
				}
			}
			return 0;
		},
    selectedFoods() {
      let foods = [];
      if (this.goods.length == 0) {
        return []
      };
      for (let i = 0; i < this.goods.length; i++) {
        let good = this.goods[i];
        good.foods.forEach(food => {
          if (food.count > 0) {
            foods.push(food);
          }
        })
      }
      return foods;
    }
  },
  mounted(){
    this.axios.get("/api/goods").then((res)=>{
      if(res.data.erron==0){
        this.goods = res.data.data;
        this.$nextTick(()=>{
          this._initScroll();
          this._cuntHeight()


          })

      }

    })

  },

  methods:{
    ballEvent(target) {
			this.$refs.shopCart.ballClick(target);


		},
    _initScroll(){
      this.menuScroll = new BScroll(this.$refs.menuScroll,{
        click:true
        });
      this.foodScroll = new BScroll(this.$refs.foodScroll,{
        probeType:3,
        click:true
        });

        this.foodScroll.on('scroll',(pos)=>{
          this.scrollY = Math.abs(Math.round(pos.y))
        })


    },
    _cuntHeight(){
      let dts = this.$refs.foodScroll.getElementsByTagName('dt');
      for(var i=0;i<dts.length;i++){
          this.Heights.push(dts[i].offsetTop)
        }

    },
    scrollTo(index) {
			this.menuIndex = index;
			this.foodScroll.scrollTo(0, -this.Heights[index], 100);
		}
  }
}
</script>

<style lang="less">
@import '../../static/less/var.less';
.shop-main-middle{
  overflow: hidden;
    position: absolute;
    top: @base*348rem;
    left: 0;
    bottom:  @base*100rem;

    display: flex;
    background-color: #fff;
    width: 100%;
    .shop-main-left{
      width: @base*180rem;
      height: 100%;
      li{
        color: @fontc;

        font-size: @base*30rem;

        text-align: center;
        background-color: #F8F8F8;
        padding: @base*35rem @base*15rem;
        border-bottom:1px solid @bc1;
        &.act{
          background-color: #fff;
          border-left:2px solid @bc;
        }
      }
    }
    .food-wrapper{
      flex:1;
      height: 100%;

      dl{
        width: 100%;
        dt{
          font-size: @base*40rem;
          background-color: #ccc;
        }
        dd{
          display: flex;
          padding-bottom: @base*30rem;
          border-bottom: 1px solid @bc1;
          img{
            width: @base*120rem;
            height: @base*120rem;
            border: 1px solid #fff;
            margin: @base*30rem @base*20rem;
            border-radius: 5px;
          }
          .food-info{

            display: flex;
            flex-direction: column;
            flex: 1;
            padding-top: @base*30rem;
            font-weight: 600;
            color:@fontc;
            h4{
                color: #333;
              font-size: @base*36rem;
            }
            p{
              line-height: @base*40rem;

            }
            .desc{
                font-size: @base*24rem;
            }
            .sales{
              font-size: @base*24rem;
            }
            .cost{
              color: #f60;

              display: flex;
              justify-content: space-between;
              span{
                  font-size: @base*22rem;
                span{
                  font-size: @base*36rem;
                }
              }

            }
          }
        }

      }

    }
}

</style>
