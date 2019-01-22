<template>
    <div class="head">
        <div class="header-content">
            <div class="qrcode">
                <router-link to="/category">
                    <i class="el-icon-menu"></i>
                    <span>分类</span>
                </router-link>
            </div>
            <div class="box-search">
                <router-link to="/search">
                    <i class="el-icon-search"></i>
                    <span class="single-line">搜索商品/店铺</span>
                </router-link>
            </div>
            <div class="nav-right">
                <router-link to="/message">
                    <el-badge :value="num" class="item">
                         <i class="el-icon-more-outline"></i>
                    </el-badge>
                    <span>消息</span>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                num:0,
            }
        }
    }
</script>
<style>
    .head{
        background: transparent;
        width: 100%;
        height: 1rem;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 209;
    }
    .qrcode{
        position: relative;
        margin: 0.1rem 0.2rem 0;
    }
    .header-content{
        position: relative;
        width: 100%;
        height: 100%;
        line-height: 100%;
        display: -webkit-box;
    }
    .box-search{
        -webkit-box-flex: 1;
        background: rgba(255,255,255,.2);
        margin-top: 0.2rem;
        height: 0.6rem;
        line-height: 0.6rem;
        position: relative;
        border-radius: 0.4rem;
        color: #fff;
    }
    .nav-right{
        margin-top: 0.1rem;
        position: relative;
        margin: 0.1rem 0.2rem 0;
    }
    .el-icon-menu{
        display: block;
        width: 0.5rem;
        height: 0.5rem;
        margin: auto;
        margin-top: 3px;
    }
    .el-icon-menu:before {
        font-size: 0.5rem;
        color: #fff;
    }
    .qrcode a span{
        display: block;
        height: 0.2rem;
        line-height: 0.2rem;
        text-align: center;
        font-size: 12px;
        color: #fff;
    }
    .box-search a{
        position: relative;
    }
    .box-search a i{
        margin-left: 12px;
        color: #fff;
        position: relative;
        bottom: -1px;
    }
    .box-search a span{
        margin-left: .2rem;
        font-size: 0.26rem;
        color: #fff;
    }
    .icon-search{
        margin-left: 12px;
        color: #fff;
        position: relative;
        bottom: -1px;
    }
    .nav-right a{
        display: inline-block;
        cursor: pointer;
    }
    .nav-right a span{
        display: block;
        height: 10px;
        line-height: 10px;
        text-align: center;
        font-size: 12px;
        color: #fff;
    }
    .el-badge{
        display: block;
        width: 0.5rem;
        height: 0.5rem;
        margin: auto;
        position: relative;
    }
    .nav-right .el-badge__content {
        width: 0.26rem;
        height: 0.26rem;
        line-height: 0.26rem;
        font-size: 0.2rem;
        padding: 0;
        margin-top: 0.1rem;
        position: absolute;
        left: 0.1rem;
        background: #fff;
        color: red;
    }
    .el-icon-more-outline{
        display: block;
        width: 0.5rem;
        height: 0.5rem;
    }
    .el-icon-more-outline{
        font-size: 0.44rem;
        color: #fff;
    }
</style>


