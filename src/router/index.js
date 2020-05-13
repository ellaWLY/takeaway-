import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/orderFood',
      name: 'orderFood',
      component: resolve => require(['@/pages/home/orderFood.vue'], resolve),
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/review',
      name: 'review',
      component: resolve => require(['@/pages/home/review.vue'], resolve),
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/merchant',
      name: 'merchant',
      component: resolve => require(['@/pages/home/merchant.vue'], resolve),
      meta: {
        keepAlive: true
      }
    }
  ]
})
