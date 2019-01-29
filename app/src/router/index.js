import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index'
import login from '@/view/login'
import register from '@/view/reg/register'
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
import agreement from '@/view/reg/children/agreement'
import code from '@/view/reg/children/code'
import pass from '@/view/reg/children/pass'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:index,
      redirect:"/home"
    },
    {
      path:"/home",
      name:"home",
      component:home
    },
    {
      path:"/cart",
      name:"cart",
      component:cart
    },
    {
      path:"/category",
      name:"category",
      component:category
    },
    {
      path:"/user",
      meta:{
        isLogin:true
      },
      name:"/user",
      component:user
    },
    {
      path:"/nearby",
      name:"nearby",
      component:nearby
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
      path:"/register",
      meta:{
        isLogin:false
      },
      name:"/register",
      component:register,
      children:[
        {
          path:'agreement',
          name:"agreement",
          component:agreement
        },
        {
          path:"code/:id",
          name:"code",
          component:code,
          children:[
            {
              path:"pass/:id",
              name:"pass",
              component:pass,
            }
          ]
        },
      ]
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
