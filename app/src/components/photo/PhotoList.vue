<template>
    <div class="photo">
        <ul>
            <li v-for="(photo,index) in photoData" :key="index">
                <img :src="photo.src" alt="">
            </li>
        </ul>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        data(){
            return{
                photoData:[]
            }
        },
        created() {
            axios.get('./static/data/photodata.json').then(res => {
                this.photoData = res.data.photoData;
            }).catch( res => {

            });
        },
    }
</script>

<style scoped>
    .photo li{
        width:50%;
        float: left;
    }
    .photo li img{
        width:100%;
        display: block;
    }



</style>