<template>
    <div>
        <div>
            <div>
                <img :src="movieDetail.img" alt="">
            </div>
            <div>
                <h3>{{movieDetail.nm}}</h3>
                <p>{{movieDetail.sc}}</p>
                <p>{{movieDetail.cat}}</p>
                <p>{{movieDetail.src}}</p>
                <p>{{movieDetail.rt}}</p>
            </div>

        </div>
        <div>
            <h2>主演</h2>
            <p>{{movieDetail.star}}</p>

        </div>

    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        data(){
            return{
                movieDetail:{}
            }
        },
        created() {
            axios.get(`./static/data/moviedetail.json?movieId=${this.$route.params.movieId}`).then(res => {
                this.movieDetail = res.data.data.MovieDetailModel
            }).catch(res => {
                
            });
        }
        
    }
</script>

<style scoped>

</style>