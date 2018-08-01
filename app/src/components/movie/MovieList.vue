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
                isShow:false,
                resultLength:0
            }
        },
        methods:{
            load(){
                axios.get(`./static/data/moviedata${this.movieList.length}.json`).then(res =>{
                    this.resultLength = res.data.data.movies.length;
                    this.movieList = this.movieList.concat(res.data.data.movies);
                    this.isShow = false;
                }).catch(res => {
                    console.log('获取数据失败');
                });
            }
        },
        created () {
            this.load();
            window.onscroll = () => {
                 //取到滚动条滚动出去的高度（页面滚出去的高度 ）
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                //页面可视区的高度
                let clientHeight = document.documentElement.clientHeight;
                //整个页面的高度
                let height = document.documentElement.scrollHeight;
                
                if(scrollTop + clientHeight == height){//到底部
                       
                    
                    if(this.resultLength == 10){
                        this.isShow = true;
                        this.load();
                    }
                    
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