<template>
    <div class="swiper-container typeSwiper" ref="typeSwiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <ul>
                    <li v-for="(item,index) in types" :key="index">
                        <router-link :to="item.router">
                            <img :src="item.type">
                            <span>{{item.content}}</span>
                        </router-link>
                    </li>
                </ul>
            </div>
		</div>
    </div>
</template>
<script>
    import type1 from "./../../../assets/img/type1.png"
    import type2 from "./../../../assets/img/type2.png"
    import type3 from "./../../../assets/img/type3.png"
    import type4 from "./../../../assets/img/type4.png"
    import type5 from "./../../../assets/img/type5.png"
    import type6 from "./../../../assets/img/type6.png"
    import type7 from "./../../../assets/img/type7.png"
    import type8 from "./../../../assets/img/type8.png"

    export default {
        data(){
            return {
                types:[
                    {
                        type:type1,
                        content:"分类",
                        router:"/category"
                    },
                    {
                        type:type2,
                        content:"团购",
                        router:"/groupBuy"
                    },
                    {
                        type:type3,
                        content:"拼团",
                        router:"/groupBooking"
                    },
                    {
                        type:type4,
                        content:"积分商城",
                        router:"/integral"
                    },
                    {
                        type:type5,
                        content:"砍价",
                        router:"/bargain"
                    },
                    {
                        type:type6,
                        content:"店铺街",
                        router:"/nearby"
                    },
                    {
                        type:type7,
                        content:"充值有礼",
                        router:"/login"
                    },
                    {
                        type:type8,
                        content:"会员专享",
                        router:"/login"
                    }
                ],
            }
        },
        mounted(){
            new this.$swiper (this.$refs.typeSwiper, {
                pagination: {
                    el: '.swiper-pagination',
                },
            })  
        }
    }
</script>
<style>
    .typeSwiper{
        width: 7.5rem;
        height: 3.28rem;
        background: #fff;
    }
    .typeSwiper .swiper-slide ul{
        display: flex;
        width: 7.5rem;
        flex-wrap: wrap;
        height: 3.08rem;
    }
    .typeSwiper .swiper-slide li{
        width: 25%;
    }
    .typeSwiper .swiper-slide li a{
        display: block;
        width: 100%;
        text-align: center;
        margin-bottom: 10px;
        position: relative;
        height: 67px;
    }
    .typeSwiper .swiper-slide img{
        width: 0.9rem;
        height: 0.9rem;
        margin: 0 auto 6px auto;
    }
    
    .typeSwiper .swiper-wrapper{
        padding-top: 0.2rem;
        width: 100%;
        height: 3.08rem;
    } 
    .typeSwiper .swiper-slide ul li a span{
        display: block;
        width: 100%;
        min-height: 16px;
        text-align: center;
        color: #666;
        font-size: 0.26rem;
        position: absolute;
        left: 0px;
        bottom: 0px;
    } 
</style>