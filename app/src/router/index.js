import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index'
import login from '@/view/login'
import register from '@/view/register'
import cart from '@/view/index/cart'
import home from '@/view/index/home'
import category from '@/view/index/category'
import nearby from '@/view/index/nearby'
import user from '@/view/index/user'
import groupBuy from '@/view/type/groupBuy'
import groupBooking from '@/view/type/groupBooking'
import bargain from '@/view/type/bargain'
import integral from '@/view/type/integral'
import search from '@/view/head/search'
import message from '@/view/head/message'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component:index,
      redirect:"/home",
      children:[{
        path:"/home",
        name:"home",
        component:home
      }]
    },
    {
      path:"/register",
      meta:{
        isLogin:false
      },
      name:"register",
      component:register
    },
    {
      path:"/login",
      meta:{
        isLogin:false
      },
      name:"login",
      component:login
    },
    {
      path:"/cart",
      meta:{
        isLogin:false
      },
      name:"cart",
      component:cart
    },
    {
      path:"/category",
      meta:{
        isLogin:false
      },
      name:"category",
      component:category
    },
    {
      path:"/user",
      meta:{
        isLogin:true
      },
      name:"user",
      component:user
    },
    {
      path:"/nearby",
      meta:{
        isLogin:false
      },
      name:"nearby",
      component:nearby
    },
    {
      path:"/groupBuy",
      meta:{
        isLogin:false
      },
      name:"groupBuy",
      component:groupBuy
    },
    {
      path:"/groupBooking",
      meta:{
        isLogin:false
      },
      name:"groupBooking",
      component:groupBooking
    },
    {
      path:"/integral",
      meta:{
        isLogin:false
      },
      name:"integral",
      component:integral
    },
    {
      path:"/bargain",
      meta:{
        isLogin:false
      },
      name:"bargain",
      component:bargain
    },
    {
      path:"/search",
      meta:{
        isLogin:false
      },
      name:"search",
      component:search
    },
    {
      path:"/message",
      meta:{
        isLogin:true
      },
      name:"message",
      component:message
    }
  ]
})
