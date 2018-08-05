<template>
    <v-touch v-on:swipeleft="next()"   >
        <div class="photo" :style="{'background-image':url}" @click="hide()">
        </div>
    </v-touch>
    <!-- vue-touch
    
    https://github.com/vuejs/vue-touch/tree/next
    cnpm install vue-touch@next --save
     -->
</template>
<script>
    export default {
        data(){
            return{
                 nowIndex:this.$route.params.phohoId,
                 photolist:[]
            }
        },
        created () {
           this.photolist = this.$store.state.photolist;
        },
        computed: {
            url(){
                return `url(${this.photolist[this.nowIndex].src})`;
            }
        },
        methods: {
            next(){
                this.nowIndex++;
                if(this.nowIndex == this.photolist.length ){
                    this.nowIndex = 0;
                }
            },
            hide(){
                console.log(222);
                this.$router.push('/photo/photoList');
            }
        }
    }
</script>
<style scoped>
    .photo{
        position: absolute;
        left:0;
        top:1rem;
        right:0px;
        bottom:1rem;
        color: #ffffff;
        background: #000 no-repeat center center;
        background-size: contain;
    }

</style>