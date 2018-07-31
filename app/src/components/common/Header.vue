<template>
    <div>
        <div class="header" :style="{'background':bg}"  :id="title" >
            <span class="header-home">首页</span>
            <span class="header-title">{{title}}  </span>
            <span class="header-space"></span>
        </div>
    </div>
</template>

<script>
    export default {
        props:['title','bg']
        
    }
</script>

<style scoped>
    .header{
        height: 1rem;
        line-height: 1rem;
        display: flex;
        color: #fff;
    }
    .header-home,.header-space{
        width: 1rem;
        text-indent: 0.2rem;
    }
    .header-title{
        flex-grow: 1;
        text-align: center;
        font-size: 0.5rem;
        font-weight: bold;
    }





</style>