<template lang="html">
    <div class="shopcat" >
      <div class="shopcat-left" @click="showcart=!showcart">
          <div class="shopping" :class="{animated:dropDown, bounceIn:dropDown,act:totalCount>0}">
            <span class="totle" v-if="totalCount>0">{{totalCount}}</span>
            <i class="icon iconfont icon-gouwuche"></i>
          </div>
          <div class="shopping-title">
            <p>￥{{totalPrice}}</p>
            <span>配送费￥{{3}}</span>
          </div>
      </div>
      <div class="shopcat-right" :class="{act:totalPrice>0 }" >
          ￥{{20}}起送
      </div>
      <transition name="slide">
        <div class="cart-list" @click.stop v-show="showcart&&selectedFoods.length>0">
        <div class="cart-list-header">
            <span class="car">购物车</span>
            <span class="clear"><i class="icon iconfont icon-shanchu"></i>清空</span>
        </div>
        <ul>
          <li class="food-list" v-for="food in selectedFoods">
            <span>{{food.name}}</span>
            <span>￥{{food.price}}</span>
            <span class="food-list-btn">
                <count-btn :food="food"></count-btn>
            </span>
          </li>
        </ul>
      </div>
      </transition>
      <transition v-for="(ball,index) in balls" :key="index"  @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
          <div class="ball-wrapper" v-show="ball.show">
              <div class="inner"></div>
          </div>
      </transition>
    </div>


</template>

<script>
import countBtn from '@/components/countBtn'

export default {
  data() {
    return {

      showcart:true,
      dropDown: false,
      dropBall: [],
      balls: [{
          show: false
        },
        {
          show: false
        },
        {
          show: false
        },
        {
          show: false
        },
        {
          show: false
        }, {
          show: false
        },
        {
          show: false
        },
        {
          show: false
        },
        {
          show: false
        },
        {
          show: false
        }
      ],
      isShow: false
    }
  },
  components:{
    countBtn
  },
  props:{
    selectedFoods:{
      type:Array,
      default(){
        return[
        {
          count:1,
          price:10
        },
        {
          count:1,
          price:3
        }
        ]
      }
    }
  },
  computed:{
    totalCount(){
      let total = 0;
      this.selectedFoods.forEach(food=>{
        total += food.count
        })
        return total;
    },
    totalPrice(){
      let total = 0;
      this.selectedFoods.forEach(food=>{
        total += food.count*food.price
        })
        return total;
    }

  },
  methods: {
		ballClick(target) {

			for (let i = 0; i < this.balls.length; i++) {
				let ball = this.balls[i];
				if (!ball.show) {
					ball.show = true;
					ball.target = target;
					this.dropBall.push(ball);
					return;
				}
			}
		},
		beforeEnter(el) {
			let temp = this.dropBall.concat([]);
			let ball = temp.pop();
			if (ball.show) {
				let rect = ball.target.getBoundingClientRect();
				let left = rect.left - 32;
				let top = -(window.innerHeight - rect.top - 22);
				el.style.display = '';
				el.style.webkitTransform = `translate3d(0,${top}px,0)`;
				el.style.transform = `translate3d(0,${top}px,0)`;
				let inner = el.getElementsByClassName('inner')[0];
				inner.style.webkitTransform = `translate3d(${left}px,0,0)`;
				inner.style.transform = `translate3d(${left}px,0,0)`;
			}
		},
		enter(el, done) {
			let reset = el.offsetHeight;
			// let refresh = el.offsetHeight;
			this.$nextTick(() => {
				el.style.display = '';
				el.style.webkitTransform = 'translate3d(0,0,0)';
				el.style.transform = 'translate3d(0,0,0)';
				let inner = el.getElementsByClassName('inner')[0];
				inner.style.webkitTransform = 'translate3d(0,0,0)';
				inner.style.transform = 'translate3d(0,0,0)';
				el.addEventListener('transitionend', done);

			});

		},
    afterEnter(el) {
			let ball = this.dropBall.shift();
			if (ball) {
				ball.show = false;
				el.style.display = 'none';
				this.dropDown = true;
				let self = this;
				clearTimeout(timer);
				let timer = setTimeout(() => {
					self.dropDown = false;
				}, 750)
			}
		}
  }
}
</script>

<style lang="less">
@import '../../static/less/var.less';
  .shopcat{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: @base*100rem;
    background-color: #FFF;
    display: flex;
    .ball-wrapper {
        position: fixed;
        bottom: 22px;
        left: 32px;
        z-index: 200;
        transition: 0.8s cubic-bezier(.11,.33,.23,.83);
        .inner {
            width: @base*40rem;
            height: @base*40rem;
            border-radius: 50%;
            background: red;
            transition: 0.8s ease;
        }
    }
    .shopcat-left{
      z-index: 10;
      width: 75%;
      height: 100%;
      background-color: #464648;
      display: flex;
      .shopping{
        position: relative;
        margin-top:-@base*20rem;
        margin-left:@base*20rem;
        border: @base*10rem solid  #5B5B5E;
        height: @base*85rem;
        width: @base*85rem;
        border-radius: 100%;
        background-color:#464648;
        &.act{
          background-color: @bc;
          i{
              color:#FFF;
          }
        }
        text-align: center;
        line-height: @base*85rem;
        .totle{
          position: absolute;
          top: -@base*20rem;
          right:  -@base*10rem;
          line-height:@base*40rem;
          text-align: center;
          height: @base*40rem;
          min-width: @base*40rem;
          border-radius: @base*40rem;
          background-color: red;
          color: #fff;
        }
        i{
          color: #fff;
            font-size: @base*70rem;
        }
      }
      .shopping-title{
        color: #fff;
        margin-left: @base*20rem;
        p{font-size: @base*34rem}
        span{font-size: @base*20rem;font-weight: 500;}
      }
    }
    .shopcat-right
    {
        z-index: 10;
      color: #fff;
      background-color: #5B5B5E;
        width: 25%;
        height: 100%;
        text-align: center;
        line-height:  @base*100rem;
        &.act{
          background-color:@bc;
          color: #fff;
        }
    }
  }
  .cart-list{
    position: absolute;
    left: 0;
    bottom:@base*100rem ;
    max-height:@base*681rem;
    width: 100%;
    overflow: auto;
    background-color: #fff;
    .cart-list-header{
      display: flex;
      justify-content: space-between;
      height: @base*81rem;
      background-color: #ccc;
      padding: @base*5rem @base*20rem;
      line-height: @base*81rem;
      .car{
        padding-left:@base*10rem;

      }

    }
    ul{
      .food-list{
        height:@base*80rem;
        padding:@base*15rem @base*25rem;
        border-bottom:1px solid #ccc;
        line-height: @base*80rem;
        display: flex;
        justify-content: space-between;
        .food-list-btn{
          width: @base*155rem;
        }
      }
    }
  }
  .slide-enter-active,.slide-leave-active{
    transition: 0.5s;
  }
  .slide-enter{
    transform: translateY(100%);
    opacity: 0;
  }
  .slide-leave-active{
    transform: translateY(100%);
    opacity: 0;
  }

</style>
