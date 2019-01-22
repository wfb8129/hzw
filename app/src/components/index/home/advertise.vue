<template>
    <div class="advertise">
        <div class="custom" v-for="(item,index) in advers" :key="index">
            <img :src="item">
        </div>
    </div>
</template>
<script>
    import adver1 from "./../../../assets/img/adver1.jpg"
    import adver2 from "./../../../assets/img/adver2.jpg"
    import adver3 from "./../../../assets/img/adver3.jpg"
    import adver4 from "./../../../assets/img/adver4.jpg"
    import adver5 from "./../../../assets/img/adver5.jpg"
    export default {
        data(){
            return {
                advers:[adver1,adver2,adver3,adver4,adver5]
            }
        }
    }
</script>
<style>
    .advertise{
        width: 100%;
        margin-top: 10px;
    }
    .custom{
        width: 100%;
        margin-top: 8px;
    }
    .advertise .custom img{
        width: 100%;
    }
</style>


