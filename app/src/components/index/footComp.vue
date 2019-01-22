<template>
    <footer>
       <ul>
           <li>
               <router-link to="/home">
                   <i :style="note1"></i>
                   <span>首页</span>
               </router-link>
           </li>
           <li>
               <router-link to="/category">
                   <i :style="note2"></i>
                   <span>分类</span>
               </router-link>
           </li>
           <li>
               <router-link to="/nearby">
                   <i :style="note3"></i>
                   <span>附近商家</span>
               </router-link>
           </li>
           <li>
               <router-link to="/cart">
                    <el-badge :value="num" class="item">
                        <i :style="note4"></i>
                    </el-badge>
                   <span>购物车</span>
               </router-link>
           </li>
           <li>
               <router-link to="/user">
                   <i :style="note5"></i>
                   <span>我的</span>
               </router-link>
           </li>
       </ul>
    </footer>
</template>
<script>
    export default {
        data(){
            return {
                note1:{
                    background:"url("+require("./../../assets/img/tab_home.png")+")",
                    backgroundSize:0.54+'rem',
                    backgroundRepeat:"no-repeat"
                },
                note2:{
                    background:"url("+require("./../../assets/img/tab_category.png")+")",
                    backgroundSize:0.54+'rem',
                    backgroundRepeat:"no-repeat"
                },
                note3:{
                    background:"url("+require("./../../assets/img/tab_nearby.png")+")",
                    backgroundSize:0.54+'rem',
                    backgroundRepeat:"no-repeat"
                },
                note4:{
                    background:"url("+require("./../../assets/img/tab_cart.png")+")",
                    backgroundSize:0.54+'rem',
                    backgroundRepeat:"no-repeat"
                },
                note5:{
                    background:"url("+require("./../../assets/img/tab_user.png")+")",
                    backgroundSize:0.54+'rem',
                    backgroundRepeat:"no-repeat"
                },
                num:0
            }
        }
    }
</script>

<style>
    footer .el-badge__content {
        width: 0.3rem;
        height: 0.3rem;
        font-size: 0.24rem;
        padding: 0;
        margin-top: 0.1rem;
        position: absolute;
        left: 0.05rem;
    }
    footer{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1rem;
        background: #fff;
        z-index: 101;
        padding: 0px;
        margin: auto;
    }
    footer ul{
        width: 100%;
        height: 0.94rem;
        margin: 0 auto;
        padding: 0px;
        display: -webkit-box !important;
        position: relative;
    }
    footer ul li{
        position: relative;
        -webkit-box-flex: 1;
        height: 0.94rem;
        text-align: center;
        margin: 0px;
        width: 100%;
        box-sizing: border-box;
        margin-top: 3px;
    }
    footer ul li a{
        text-align: center;
        font-size: 12px;
        color: #666;
        display: block;
        height: 0.94rem;
        position: relative;
        margin: auto;
    }
    footer ul li span{
        display: block;
        width: 100%;
        margin-top: 1px;
        line-height: 19px;
        font-size: 0.24rem;
    }
    footer ul li a i{
        display: block;
        width: 0.5rem;
        height: 0.5rem;
        margin: 2px auto 0;
        position: relative;
    }
</style>

