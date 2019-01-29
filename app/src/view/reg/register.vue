<template>
    <div>
        <div class="reg-content">
            <reg-head></reg-head>
            <div class="middle-content">
                <span class="tip-text">手机号即为登录账号，我们将发送验证短信到该号码</span>
            </div>
            <div class="reg-num">
                <dl>
                    <dt>
                        <span>手机号：</span>
                    </dt>
                    <dd>
                        <el-input type="tel" v-model="regname" maxlength="11" placeholder="请输入手机号码" autofocus="true" :clearable="true"></el-input>
                    </dd>
                </dl>
            </div>
            <div class="reg-agree">
                <el-checkbox v-model="checked"></el-checkbox>
                <router-link to="/register/agreement">我已阅读并同意《用户注册协议》</router-link>
            </div>
            <div class="submit">
                <router-link :to="rot" :style="{background:a,color:b}">下一步</router-link>
            </div>
        </div>
        <transition name="router-slid" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
    import regHead from "@/components/reg/regHead"
    export default {
        data(){
            return {
                checked:true,
                regname:"",
                rot:"",
                a:"",
                b:"",
            }
        },
        components:{
            regHead,
        },
        methods:{
            
        },
        watch:{
            regname(){
                if(this.regname.length == 11){
                    this.a = "red";
                    this.b = "white";
                    this.rot = "/register/code/"+this.regname
                }
            }
        }
        
    }
</script>


<style>

    .reg-content{
        width: 100%;
        background-color: #f3f5f7;
    }
    .middle-content {
        width: 100%;
        margin: 0.2rem auto 0px;
        overflow: hidden;
    }
    .tip-text {
        line-height: 20px;
        display: block;
        margin-bottom: 0.2rem;
        color: #999;
        font-size: 0.26rem;
        margin-left: 3%;
    }
    .reg-num{
        width: 100%;
        height: 1rem;
        background-color: #fff;
    }
    .reg-num dl{
        width: 94%;
        margin: auto;
        height: 100%;
    }
    .reg-num dl dt{
        float: left;
        width: 30%;
        height: 100%;
        line-height: 1rem;
        color: #222;
        font-size: 0.3rem;
    }
    .reg-num dl dd{
        float: left;
        width: 70%;
        height: 100%;
        line-height: 1rem;
    }
    .reg-num dl dd input{
        border: none;
        padding: 0.2rem 0 0.2rem;
        line-height: 0.5rem;
        width: 190px;
        font-size: 0.3rem;
        color: #666;
        height: 0.5rem;
        outline: none;
    }
    .reg-agree{
        color: #ccc;
        width: 100%;
        margin-top: 0.2rem;
    }
    .reg-agree a{
        color: #999;
    }
    .reg-agree .el-checkbox__input .el-checkbox__inner{
        border-radius: 100%;
        width: 0.36rem;
        height: 0.36rem;
        border: none;
        border: 1px solid #ccc;
        margin-left: 0.2rem
    }
    .reg-agree .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner{
        background-color: red;
    }
    .reg-agree .el-checkbox__input.is-focus {
        border-color:#ccc; 
    }
    .reg-agree .el-checkbox__inner:hover{
        border-color:#ccc; 
    }
    .reg-agree .el-checkbox__inner::after{
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 4px;
        width: 0.1rem;
        border-bottom-width: 3px;
        border-right-width: 3px;
    }
    .submit{
        width: 94%;
        height: 1.4rem;
        margin: 0 auto;
        padding: 5px 0;
    }
    .submit a{
        background: #e5e5e5;
        color: #999;
        display: block;
        width: 100%;
        margin-top: 0.4rem;
        height: 0.8rem;
        line-height: 0.8rem;
        border: 0px;
        border-radius: 4px;
        font-size: 0.36rem;
        letter-spacing: 1px;
        text-align: center;
    }
    .router-slid-enter-active, .router-slid-leave-active {
        transition: all .4s;
    }
    .router-slid-enter, .router-slid-leave-active {
        transform: translate3d(1rem, 0, 0);
        opacity: 0;
    }
</style>

