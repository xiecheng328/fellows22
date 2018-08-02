<template>
    <div>
        <aplayer autoplay
  :music="{
    title: 'secret base~君がくれたもの~',
    artist: 'Silent Siren',
    src: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.mp3',
    pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg'
  }"
/>
        <!-- {{$route.params.musicId}} -->
    </div>
</template>

<script>
    import aplayer from 'vue-aplayer'
    import axios from 'axios'
    export default {
        components: {
            aplayer
        },
        created() {
            axios.get('./static/data/musicdata.json').then(res =>{
                console.log(res.data.musicData);
            }).catch(res => {
                
            });

            [{
                src:'',
                title:''
                artist:''
            }]
        }




        
    }
</script>

<style scoped>

</style>