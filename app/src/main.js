// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入屏幕适配脚本
import "./assets/rem.js"
//引入swiper及样式
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css"
//引入请求模块
import req from "./api/req.js";
//引入vuex仓库
import store from "./store/index";
//引入element-ui 及样式表
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//引入全局样式
import "./assets/index.css"
Vue.use(ElementUI)
Vue.prototype.$swiper = Swiper;
Vue.prototype.$http = req;
Vue.config.productionTip = false;
//路由拦截页面
router.beforeEach((to,from,next)=>{
    if(to.meta.isLogin){
        if(localStorage.userID&&localStorage.user_tokenID){
          next()
        }else{
          next({
              path: '/login',
          })
        }
    }else{
      next()
    }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
