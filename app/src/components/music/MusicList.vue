<template>
    <div class="movieList">
        <img :src="obj.bg" alt="" v-for="(obj,index) in musicList" :key="index" @click="musicDetail(obj.id)">
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return{
                musicList:[]
            }
        },
        created() {
            axios.get('./static/data/musiclist.json').then(res => {
                this.musicList = res.data.albums;
            }).catch(res => {
                console.log('数据获取失败');
            })
        },
        methods:{
            musicDetail(id){
                this.$router.push(`/music/musicDetail/${id}`);
            }
        }
    }
</script>

<style scoped>
    .movieList img{
        width:50%;
        display: block;
        float: left;
    }


</style>