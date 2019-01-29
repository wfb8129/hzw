<template>
    <div class="home">
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        components:{
            
        }
    }
</script>
<style>
    .home{
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    .home>div{
        flex: 1;
    }
</style>

