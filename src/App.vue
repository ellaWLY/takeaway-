<template>
  <div id="app">
    <v-header></v-header>
    <div class="shop_img">
      <img src="./assets/3.jpeg" alt="背景图">
    </div>
    <div class="detail_box">
      <div class="detail_box_show" @click="hideBoxShow()">
        <div class="shop_logo">
          <img src="./assets/4.jpg">
        </div>
        <div class="give_like">
          <span class="icon iconfont icon-xin1"></span>
        </div>
        <div class="shop-name">{{shopName}}</div>
        <div class="shop_time">
          <span>评价{{shopList.remark}}</span>
          <span>月售{{shopList.sale}}</span>
          <span>蜂鸟专送约{{shopList.time}}分钟</span>
        </div>
        <div class="shop_coupon">
          <span>
            ￥{{couponMoney}} <i class="icon iconfont icon-huangguan"></i>无门槛
          </span>
          <span>领取</span>
        </div>
        <div class="money_off_box">
          <transition name="fade">
            <div v-if="!hideBoxShowfun">
              <div class="money_off">
                  <div v-for="list in moneyList">
                    <span>{{list.rental}}减{{list.coupon}}</span>
                  </div>
              </div>
              <div class="more_coupon">{{couponNum}}个优惠 <i class="icon iconfont icon-xiajiantou"></i></div>
            </div>
          </transition>
        </div>
      </div>
      <transition name="fade">
        <div class="detail_box_hide" v-show="hideBoxShowfun">
          <div>
            <div class="detail-title">
              <span>优惠</span>
              <span @click="hideBoxHide()"><i class="icon iconfont icon-ico_back"></i></span>
            </div>
            <div class="coupon_box">
              <div v-for="list in couponList">
                <span>{{list.name}}</span>
                <span>{{list.detail}}</span>
              </div>
            </div>
            <div class="detail-title">
              <span>服务</span>
            </div>
            <div class="service_box">
              <div v-for="list in serviceList">
                <span>{{list.name}}</span>
                <span>{{list.detail}}</span>
              </div>
            </div>
            <div class="detail-title">
              <span>公告</span>
            </div>
            <div class="notice">{{notice}}</div>
          </div>
          <div class="hide_bottom" @click="hideBoxHide()">
            <span>
              <i class="icon iconfont icon-ico_back"></i>
            </span>
          </div>
        </div>
      </transition>
    </div>
    <router-view/>
  </div>
</template>

<script>
import header from './components/header/header'
export default {
  name: 'App',
  data() {
    return {
      shopName: '奇乐奇乐(梅江店)',
      shopList: {
        remark: '4.9',
        sale: '1304',
        time: '30'
      },
      couponMoney: '8',
      moneyList: [
        {
          rental: '35',
          coupon: '6'
        },
        {
          rental: '60',
          coupon: '8'
        },
        {
          rental: '87',
          coupon: '18'
        },
        {
          rental: '120',
          coupon: '30'
        }
      ],
      couponNum: '8',
      hideBoxShowfun: false,
      couponList: [
        {
          name: '满减',
          detail: '满35元减6元，满60元减8元，满87元减18元，满120元减30元'
        },
        {
          name: '会员',
          detail: '超级会员领8元无门槛红包'
        },
        {
          name: '配送',
          detail: '配送费立减3元'
        },
        {
          name: '奖励',
          detail: '30天内下单得￥15店铺红包'
        },
        {
          name: '满赠',
          detail: '满132元赠送玉米沙拉1份'
        },
        {
          name: '特价',
          detail: '特价商品3元起'
        },
        {
          name: '红包',
          detail: '实付30元返5元店铺专享红包'
        },
        {
          name: '首单',
          detail: '饿了么新用户首单立减9元'
        }
      ],
      serviceList: [
        {
          name: '食无忧',
          detail: '该商户已购买食品安全责任险，食品安全有保障'
        },
        {
          name: '开发票',
          detail: '该商家支持开发票，请在下单时填写好'
        }
      ],
      notice: '欢迎光临，用餐高峰期请提前下单，谢谢'
    }
  },
  components:{
    'v-header': header
  },
  methods: {
    hideBoxShow() {
      let self = this
      if(self.hideBoxShowfun == false) {
        self.hideBoxShowfun = true
      }
    },
    hideBoxHide() {
      let self = this
      if(self.hideBoxShowfun == true) {
        self.hideBoxShowfun = false
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.shop_img {
  width: 100%;
  height: 3rem;
  position: fixed;
}
.shop_img img {
  display: block;
  width: 100%;
  height: 100%;
}
.detail_box {
  padding-top: 3rem;
  width: 100%;
  height: 30rem;
}
.detail_box_show {
  position: relative;
  width: 100%;
  background: #fff;
}
.shop_logo {
  position: absolute;
  top: -1.7rem;
  left: 50%;
  transform: translate(-50%,0);
  width: 2rem;
  height: 2rem;
}
.shop_logo img {
  display: block;
  width: 100%;
  height: 100%;
}
.give_like {
  position: absolute;
  top: -0.3rem;
  right: 0.5rem;
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  background: #fff;
  box-shadow: -1px 1px 15px -2px rgba(0,0,0,.5)
}
.give_like .icon {
  font-size: 0.45rem;
  text-align: center;
  line-height: 0.7rem;
  color: crimson;
}
.shop-name {
  text-align: center;
  font-size: 0.4rem;
  color: #333;
  padding-top: 0.5rem;
  line-height: 0.7rem;
}
.shop_time {
  text-align: center;
  font-size: 0.24rem;
  color: #333;
}
.shop_time > span:nth-of-type(1),
.shop_time > span:nth-of-type(2) {
   margin-right: 10px;
}
.shop_coupon {
  margin: 16px auto;
}
.shop_coupon > span {
  background: rgb(251,230,135);
  color: rgb(118,75,29);
}
.shop_coupon > span:nth-of-type(1) {
  padding: 0.1rem 0.25rem;
  border-radius: 2px 5px 5px 2px;
}
.shop_coupon > span:nth-of-type(2) {
  padding: 0.1rem 0.15rem;
  border-radius: 5px 2px 2px 5px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.money_off_box {
  width: 100%;
  height: 0.38rem;
  padding: 0 10%;
  overflow: hidden;
}
.money_off {
  float: left;
}
.money_off > div {
  display: inline-block;
  border: 1px solid rgb(247,205,198);
  border-radius: 2px;
  color: rgb(235,89,64);
  padding: 0 5px;
  margin-right: 5px;
  font-size: 12px;
}
.more_coupon {
  float: right;
  font-size: 13px;
  color: rgb(159,159,159);
}
.detail_box_hide {
  position: relative;
  width: 100%;
  padding: 0 5%;
  background: #fff;
}
.detail_box_hide .detail-title {
  overflow: hidden;
  margin-bottom: 0.3rem;
}
.detail_box_hide .detail-title span:nth-of-type(1) {
  float: left;
  font-size: 0.3rem;
  color: #000;
  font-weight: 600;
}
.detail_box_hide .detail-title span:nth-of-type(2) {
  float: right;
  color: rgb(159,159,159);
}
.coupon_box > div ,
.service_box > div {
  overflow: hidden;
  margin-bottom: 0.15rem;
}
.coupon_box > div span ,
.service_box > div span {
  font-size: 13px;
  display: inline-block;
}
.coupon_box > div span:nth-of-type(1) {
  float: left;
  color: rgb(235,89,64);
  border: 1px solid rgb(247,205,198);
  border-radius: 2px;
  padding: 0 2px;
}
.coupon_box > div span:nth-of-type(2) {
  float: right;
  width: 88%;
  text-align: left;
  line-height: 0.4rem;
}
.service_box > div span:nth-of-type(1) {
  float: left;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  padding: 0 2px;
}
.service_box > div span:nth-of-type(2) {
  float: right;
  width: 84%;
  text-align: left;
  line-height: 0.4rem;
}
.notice {
  text-align: left;
}
.hide_bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1.5rem;
  background: transparent;
  background-image: linear-gradient(rgba(255,255,255,.8), rgba(255,255,255,1), rgba(255,255,255,1));
}
.hide_bottom span {
  display: block;
  margin: 0.3rem auto 0;
}
.hide_bottom span .icon {
  font-size: 0.54rem;
  color: rgb(159,159,159);
}
</style>
