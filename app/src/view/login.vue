<template>
    <div class="login-top">
        <div class="top-header">
            <div class="left">
                <router-link to="/home">
                    <i class="el-icon-arrow-left"></i>      
                </router-link>
            </div>
            <div class="right">
                <router-link to="/register">
                    注册     
                </router-link>
            </div>
        </div>
        <div class="login-img"></div>
        <div class="login-radio">
            <ul>
                <li>
                    普通登录
                </li>
                <li>
                    动态密码登录
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {

            }
        },
        methods:{

        }
    }
</script>
<style>
    .login-top{
        width: 100%;
        height: 2.4rem;
        background: url(./../assets/img/login1.png)
    }
    .top-header{
        width: 100%;
        height: 1rem;
    }
    .login-top .left{
        float: left;
        height: 100%;
        width: 1rem;
    }
    .login-top .left .el-icon-arrow-left{
        color: #fff;
        font-size: 0.5rem;
        margin-left: 0.1rem;
        margin-top: 0.1rem;
    }
    .login-top .right{
        float: right;
        height: 100%;
        width: 1rem;
    }
    .login-top .right a{
        display: block;
        color: #fff;
        font-size: 0.4rem;
        margin-top: 0.08rem;
        margin-right: 0.1rem;
    }
    .login-img{
        width: 100%;
        height: 1.4rem;
        background: url(./../assets/img/login2.png) no-repeat center;
        background-size: 313px;
    }
    .login-radio{
        width: 100%;
        height: 1rem;
    }
    .login-radio ul{
        width: 100%;
        height: 100%;
    }
    .login-radio ul li{
        float: left;
        width: 50%;
        height: 100%;
        line-height: 1rem;
        text-align: center;
        font-size: 0.34rem;
        color: #000;
    }
</style>

