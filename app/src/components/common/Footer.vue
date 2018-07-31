<template>
    <div>
        <ul class="footer" :style="{'background':bg}">
            <li>电影</li>
            <li>音乐</li>
            <li>书籍</li>
            <li>图片</li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:['bg']
       
        
    }
</script>

<style scoped>

    .footer{
        display: flex;
        height: 1rem;
        line-height: 1rem;
        position: fixed;
        bottom:0px;
        width: 100%;
    }
    .footer li{
        flex-grow: 1;
        text-align: center;
        color: #ccc;

    }





</style>