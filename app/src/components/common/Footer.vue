<template>
    <div>
        <ul class="footer" :style="{'background':bg}">
            <li @click="$emit('change','red')"><router-link to="/movie/movieList">电影</router-link></li>
            <li @click="$emit('change','green')"><router-link to="/music/musicList">音乐</router-link></li>
            <li><router-link to="">书籍</router-link></li>
            <li><router-link to="">图片</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:['bg'],
        methods:{
        }
    }
</script>

<style scoped>

    .footer{
        display: flex;
        height: 1rem;
        line-height: 1rem;
        position: fixed;
        bottom:0px;
        width: 100%;
    }
    .footer li{
        flex-grow: 1;
        text-align: center;
        color: #ccc;

    }





</style>