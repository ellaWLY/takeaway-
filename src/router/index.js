import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homeIndex',
      component: resolve => require(['@/pages/home/homeIndex.vue'], resolve)
    }
  ]
})
