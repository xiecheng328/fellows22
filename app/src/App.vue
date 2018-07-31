<template>
  <div id="app">
    <common-header :bg="bgColor" title="movie" ></common-header>
        <router-view/>
    <common-footer :bg="bgColor" @change="fn"></common-footer>
  </div>
</template>

<script>
import CommonHeader from '@/components/common/Header'
import CommonFooter from '@/components/common/Footer'
export default {
  name: 'App',
  data(){
    return{
      bgColor:'red'
    }
  },
  components: {
    CommonHeader,
    CommonFooter
  },
  methods: {
    fn(color){
      console.log(color);
      // this.bg = color;
      this.bgColor = color;

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body{
  font-size:0.32rem;
}
</style>
