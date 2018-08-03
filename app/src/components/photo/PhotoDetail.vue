<template>
    <div class="photo" :style="{'background-image':url}">
    </div>
</template>
<script>
    export default {
        data(){
            return{
                 nowIndex:this.$route.params.phohoId,
                 photolist:[],
                 url:''
            }
        },
        created () {
           this.photolist = this.$store.state.photolist;
           this.url = `url(${this.photolist[this.nowIndex].src})`;
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