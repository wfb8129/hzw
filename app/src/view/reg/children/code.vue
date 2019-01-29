<template>
    <div class="reg-code">
        <div>
            <reg-head></reg-head>
            <div class="middle-content">
                <span class="tip-text">请输入{{$route.params.id}}收到的验证码</span>
            </div>
            <div class="reg-num">
                <dl>
                    <dt>
                        <span>短信校验码：</span>
                    </dt>
                    <dd>
                        <input type="text" v-model="num" maxlength="4">
                        <button @click="getCode()" v-show="show" class="code">获取验证码</button>
                        <button @click="getCode()" v-show="!show" class="count">{{count}}秒后重新获取</button>
                    </dd>
                </dl>
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
                show:"true",
                num:"",
                a:"",
                b:"",
                timer:"",
                count:"",
                rot:""
            }
        },
        methods:{
            getCode(){
                this.$http.getCodes().then(res=>{
                    var c = JSON.parse(res.data);
                    this.num = c;
                })
                if (!this.timer) {
                    this.count = 60;
                    this.show = false;
                    this.timer = setInterval(()=>{
                        if (this.count>0&&this.count <=60) {
                            this.count--;
                        } else {
                            this.show = true;
                            clearInterval(this.timer);
                            this.timer = "";
                        }
                    },1000)
                }
            }
        },
        components:{
            regHead,
        },
        mounted(){
            console.log(this.$route.params.id)
        },
        watch:{
            num(){
                if(this.num){
                    this.a = "red";
                    this.b = "white";
                    this.rot = "/register/code/"+this.$route.params.id+"/pass/"+this.$route.params.id
                }
            }
        }
    }
</script>


<style>
    .reg-code{
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #f3f5f7;
        z-index: 50;
    }
    .reg-code .reg-num{
        position: relative;
    }
    .reg-code .code{
        background-color: #f56456;
        position: absolute;
        top: 0.15rem;
        right: 0;
        height: 0.64rem;
        padding: 0 7px;
        line-height: 0.3rem;
        text-align: center;
        border-radius: 3px;
        font-size: 0.26rem;
        color: #fff;
        border: none;
        outline: none;
    }
    .reg-code .count{
        background-color: #ccc;
        position: absolute;
        top: 0.15rem;
        right: 0;
        height: 0.64rem;
        padding: 0 7px;
        border: none;
        outline: none;
        line-height: 0.64rem;
        text-align: center;
        border-radius: 3px;
        font-size: 0.26rem;
        color: #666;
    }
    .router-slid-enter-active, .router-slid-leave-active {
        transition: all .4s;
    }
    .router-slid-enter, .router-slid-leave-active {
        transform: translate3d(1rem, 0, 0);
        opacity: 0;
    }
</style>

