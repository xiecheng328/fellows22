<template>
    <div>
        <ul>
            <li class="movieList" v-for="(obj,index) in movieList" :key="index">
                <div class="movie-img">
                    <img :src="obj.images.small" alt="">
                </div>
                <div class="movie-info">
                    <h3>{{obj.title}}</h3>
                    <p>
                        <span v-for="(val,index) in obj.genres" :key="index">{{val}}</span>
                    </p>
                    <p>
                        <span v-for="(person,index) in obj.casts" :key="index">{{person.name}}</span>
                    </p>
                    <p>{{obj.year}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    export default {
        data(){
            return{
                movieList:[]
            }
        },
        created () {
           axios.get(Vue.config.url+'http://api.douban.com/v2/movie/top250?start=0&count=10').then(res =>{
               this.movieList = res.data.subjects;

               console.log(this.movieList );
           }).catch(res => {

           });
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