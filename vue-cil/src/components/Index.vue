<template>
    <div>
        <h2>这是我的首页 </h2>

        <h3> {{$store.state.count}}</h3>

    </div>
</template>

<script>
    import store from '@/vuex/store'
    export default {
        store
    }

</script>

<style scoped>

</style>