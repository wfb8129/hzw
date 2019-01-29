//vuex状态管理仓库；
//用来储存管理共享数据；
import Vue from "vue";
import Vuex from "vuex";
import req from "@/api/req.js";
Vue.use(Vuex);
//导出vuex的状态仓库
export default new Vuex.Store({
    //等同于组建中的data
    state:{
       shopList:[]
    },
    //同步方法  修改state得值
    /*
     *  在mutations中放置异步操作，则无法获取异步操作的结束状态；
     *  所以异步操作不能放置mutations中；
     */
    mutations:{
        SHOPLIST(state,payload){
            console.log(payload)
            state.shopList =[];
            state.shopList = payload;
        },
        changeCount(state,payload){
            state.shopList[payload.index1].goods[payload.index2].count = payload.count;
        }
    },
    //存放异步操作 
    //异步操作结束后若需要对state状态修改时，需通过commit调用mutations中的方法对其修改；
    //actions不对state值进行直接修改
    actions:{
        getShopOpt({commit},payload){
            req.getGoodsOpt(payload).then(res=>{
                commit("SHOPLIST",res.data);
            })
        }
    },
    //等同于组件中的computed 计算属性
    getters:{
        typeCount(state){
            let arr = [];
            for(var i = 0 ; i < state.shopList.length ; i++){
                let goods = state.shopList[i].goods 
                let sum = 0;
                for (let k = 0; k < goods.length; k++) {
                   sum+= goods[k].count*1
                    
                }
                arr.push(sum);
            }
            return arr;
        }
    }
    
})