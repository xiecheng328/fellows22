<template>
    <div>
        <ul>
            <li class="movieList">
                <div class="movie-img">
                    <img src="http://p1.meituan.net/165.220/movie/b9395cd202a461303cf06cea89292071556090.png" alt="">
                </div>
                <div class="movie-info">
                    <h3>嗷嗷</h3>
                    <p>3D</p>
                    <p>主演：本·阿弗莱克,亨利·卡维尔,盖尔·加朵</p>
                    <p>今天47家影院放映425场</p>
                </div>
            </li>
            <li class="movieList">
                <div class="movie-img">
                    <img src="http://p0.meituan.net/165.220/movie/7797d45caf40fcfcdc0f88378850e2441016690.jpg" alt="">
                </div>
                <div class="movie-info">
                    <h3>嗷嗷</h3>
                    <p>3D</p>
                    <p>主演：本·阿弗莱克,亨利·卡维尔,盖尔·加朵</p>
                    <p>今天47家影院放映425场</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
       
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


</style>