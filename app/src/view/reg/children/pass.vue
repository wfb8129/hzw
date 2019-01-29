<template>
    <div class="reg-pass">
        <reg-head></reg-head>
        <div class="middle-content">
            <span class="tip-text">请设置登录密码</span>
        </div>
        <div class="reg-num">
            <dl>
                <dt>
                    <span>设置密码：</span>
                </dt>
                <dd>
                    <input type="password" v-model="pass" minlength="6" maxlength="20" placeholder="设置密码">
                </dd>
            </dl>
        </div>
        <div class="submit">
            <span @click="reg()" :style="{background:a,color:b}">完成</span>
        </div>
    </div>
</template>
<script>
    import regHead from "@/components/reg/regHead"
    export default {
        data(){
            return {
                a:"",
                b:"",
                pass:"",
                user:this.$route.params.id,
            }
        },
        methods:{
            reg(){
                this.$http.register({
                    username:this.user,
                    password:this.pass
                }).then(res=>{
                    this.$http.login({
                        username:this.user,
                        password:this.pass
                    }).then(res=>{
                        let data = res.data;
                        console.log(data)
                        localStorage.username=data.username;
                        localStorage.userID=data.userID;
                        localStorage.user_tokenID=data.user_tokenID;
                        this.$router.push({
                            path:"/"
                        })
                    })
                })
            }
        },
        components:{
            regHead,
        },
        watch:{
            pass(){
                if(this.pass){
                    this.a = "red";
                    this.b = "white";
                    this.rot = "/register/code/"+this.$route.params.id+"/pass/"+this.$route.params.id
                }
            }
        }
    }
</script>


<style>
    .reg-pass{
        width: 100%;
        position: absolute;
        z-index: 200;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #f3f5f7;
    }
    .submit span{
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
    
</style>

