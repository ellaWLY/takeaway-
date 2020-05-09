// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
//vuex
import Vuex from 'vuex'
Vue.use(Vuex)

import './config/rem.js' //rem
import './css/public.css' //清除默认样式
import './css/iconfont/iconfont.css' //iconfont图标

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
