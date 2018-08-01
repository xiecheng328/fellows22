<template>
    <div>
        <ul>
            <li class="movieList" v-for="(obj,index) in movieList" :key="index">
                <div class="movie-img">
                    <img :src="obj.img" alt="">
                </div>
                <div class="movie-info">
                    <h3>{{obj.nm}}</h3>
                    <p>
                        {{obj.cat}}
                    </p>
                    <p>
                        {{obj.star}}
                    </p>
                    <p>{{obj.showInfo}}</p>
                </div>
            </li>
        </ul>
        <div>
            <img src="@/assets/loading.gif" alt="" v-show="isShow">
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    export default {
        data(){
            return{
                movieList:[],
                isShow:false
            }
        },
        methods:{
            load(){
                axios.get('./static/data/moviedata0.json').then(res =>{
                        this.movieList = res.data.data.movies;
                }).catch(res => {
                        console.log('获取数据失败');
                });
            }
        },
        created () {
            this.load();
          
            window.onscroll = () => {
               //取到滚动条滚动的高度
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                let clientHeight = document.documentElement.clientHeight;
                let height = document.documentElement.scrollHeight;
                
                if(scrollTop + clientHeight == height){//到底部
                    this.isShow = true;
                    this.load();

                }

               

           }




        }
    }
</script>

<style scoped>
    .movieList{
        display: flex;
        padding: 0.2rem;
        font-size: 14px;
        line-height: 1.8;
    }
    .movie-img{
        flex-grow: 1;
        margin-right: 0.1rem;
        width: 0px;
    }
    .movie-img img{
        width: 100%;
    }
    .movie-info{
        width: 0px;
        flex-grow: 2;

    }
    .movie-info span{
        margin-right: 0.1rem;
    }


</style>