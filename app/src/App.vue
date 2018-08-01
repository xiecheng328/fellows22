<template>
  <div id="app">
    <common-header :bg="bgColor" :title="title" ></common-header>
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
      bgColor:'red',
      title:'movie'
    }
  },
  components: {
    CommonHeader,
    CommonFooter
  },
  methods: {
    fn(color,title){
      console.log(color);
      // this.bg = color;
      this.bgColor = color;
      this.title = title;

    }
  },
  created () {
    let url = this.$route.path; //    /music/musicList
    let str = url.split('/')[1];  // ['','music','musicList'] => 'music'
    switch(str){
      case 'music':
        this.bgColor = 'green';
        break;
      case 'movie':
        this.bgColor = 'red';
        break;
      case 'book':
        this.bgColor = 'blue';
        break;
      case 'photo':
        this.bgColor = 'orange';
        break;

    }


  }



}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin:1rem 0;
  overflow: hidden;
}
body{
  font-size:0.32rem;
}

</style>
