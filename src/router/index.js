import Vue from 'vue'
import Router from 'vue-router'
import Basic from '@/views/Basic'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'basic',
      component: Basic
    },
    {
      path: '/pro',
      name: 'pro',
      component: () => import(/* webpackChunkName: "pro" */ '@/views/Pro')
    }
  ]
})
