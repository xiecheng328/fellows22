<template>
    <div>
        <h3>我是列表页</h3>
        <router-link to="/list/subList1">subList1</router-link>
        <router-link to="/list/subList2">subList2</router-link>

        <router-view></router-view>
    
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>