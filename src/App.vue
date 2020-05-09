<template>
  <div id="app">
    <v-header></v-header>
    <div class="shop_img">
      <img src="./assets/3.jpeg" alt="背景图">
    </div>
    <div class="detail_box">
      <div class="detail_box_show">
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
      </div>
      <div class="detail_box_dis"></div>
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
      couponMoney: '8'
    }
  },
  components:{
    'v-header': header
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
  background: burlywood;
  width: 100%;
  height: 30rem;
}
.detail_box_show {
  position: relative;
  width: 100%;
  height: 5rem;
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
</style>
