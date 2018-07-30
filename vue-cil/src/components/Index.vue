<template>
    <div>
        <h2>这是我的首页 </h2>
        <h1>计算属性count:  {{count}}</h1>
        <h3> {{count}}  {{num}}</h3>

        <h1>getter:   {{count1}}</h1>
        <button @click="$store.commit('add',20)">++</button>
        <button @click="add(20)">++</button>
        <button @click="addAction(200)">++Action</button>
    </div>
</template>
<script>
    import store from '@/vuex/store'
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
    export default {
        store,
        /* computed:{
            count(){
                return this.$store.state.count;
            }
        } */
        /* computed:mapState({
            count:state=>state.count
        }) */
        computed: {
            ...mapState(['count','num']),
            ...mapGetters(['count1'])
        },
        methods: {
            ...mapMutations(['add']),
            ...mapActions(['addAction'])
        }
    }

</script>

<style scoped>

</style>