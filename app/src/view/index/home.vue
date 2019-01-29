<template>
    <div class="main">
        <home-head></home-head>
        <home-banner></home-banner>
        <home-type></home-type>
        <home-advertise></home-advertise>
        <foot-comp></foot-comp>
    </div>
</template>
<script>
    import homeHead from "@/components/index/home/head"
    import homeBanner from "@/components/index/home/banner"
    import homeType from "@/components/index/home/type"
    import homeAdvertise from "@/components/index/home/advertise"
    import footComp from "@/components/index/footComp"
    
    export default {
        components:{
            homeHead,
            homeBanner,
            homeType,
            homeAdvertise,
            footComp,
        }
    }
</script>
<style>
    .main{
        width: 100%;
        position: relative;
        margin-bottom: 2rem;
    }
</style>

