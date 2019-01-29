<template>
    <div>
        <header class="reg-top">
            <div class="left">
                <router-link to="/login">
                    <i class="el-icon-arrow-left"></i>
                </router-link>
            </div>
            <div class="middle">手机快速注册</div>
            <div class="right">
                <router-link to="/login">
                    登录
                </router-link>
            </div>
        </header>
    </div>
</template>
<style>
    .reg-top{
        position: relative;
        width: 100%;
        height: 1rem;
        background: #fff;
        zoom: 1;
        border-bottom: 1px solid #eee;
    }
    .reg-top .left{
        float: left;
        width: 15%;
        height: 100%;
    }
    .reg-top .left a{
        cursor: pointer;
        display: block;
        width: 0.6rem;
        height: 1rem;
    }
    .reg-top .left a .el-icon-arrow-left{
        color: #666;
        font-size: 0.5rem;
        line-height: 1rem;
        margin-left: 0.1rem;
    }
    .reg-top .middle{
        width: 70%;
        text-align: center;
        height: 1rem;
        float: left;
        color: #222;
        font-size: 0.34rem;
        line-height: 1rem;
        position: relative;
    }
    .reg-top .right{
        float: right;
        width: 10%;
        height: 100%;
        line-height: 100%;
    }
    .reg-top .right a{
        cursor: pointer;
        display: block;
        width: 0.6rem;
        height: 1rem;
        line-height: 1rem;
        color: #666;
    }
</style>

