<template>
    <div class="photo">
        <ul>
            <li v-for="(photo,index) in photoData" :key="index">
                <router-link :to="'/photo/photoDetail/'+index">
                    <img :src="photo.src" alt="">
                </router-link>
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
                //调用store下的mutations 里的addPhoto方法 第二个参数是传的参数
                this.$store.commit('addPhoto',this.photoData);
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