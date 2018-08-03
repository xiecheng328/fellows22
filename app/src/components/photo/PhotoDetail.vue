<template>
    <div class="photo">
        
    </div>
</template>

<script>
    export default {
        data(){
            return{
                 nowIndex:this.$route.params.phohoId
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
        background: #000;
        color: #ffffff
    }

</style>