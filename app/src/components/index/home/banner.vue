<template>
    <div class="swiper-container bannerSwiper" ref="bannerSwiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide"  v-for="(item,index) in banners" :key="index">
                <router-link to="/user">
                    <img :src="item">
                </router-link> 
            </div>
		</div>
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>
    import banner1 from "./../../../assets/img/banner1.jpg"
    import banner2 from "./../../../assets/img/banner2.jpg"

    export default {
        data(){
            return {
                banners:[banner1,banner2],
            }
        },
        mounted(){
            new this.$swiper (this.$refs.bannerSwiper, {
                autoplay:{
                    delay: 2000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                },
                loop:true,
                pagination: {
                    el: '.swiper-pagination',
                },
            })  
        }
    }
</script>
<style>
    .bannerSwiper{
        width: 7.5rem;
        height: 3.62rem;
    }
   .bannerSwiper .swiper-slide{
        width: 7.5rem;
    }
    .bannerSwiper .swiper-slide img{
        width: 7.5rem;
        height: 3.62rem;
    }
    .bannerSwiper .swiper-pagination-bullet{
        background-color: white;
        width: 5px;
        height: 5px;
        border-radius:100%; 
    }  
</style>
