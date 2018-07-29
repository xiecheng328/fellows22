<template>
  <div id="app">

      <button @click="goHome()">首页</button>
      <button @click="goBack()">&lt;返回</button>
      <button @click="goNext()">&gt;下一页</button>
    </br>
<!--     <router-link to="/index">首页</router-link>
    <router-link to="/list">列表页</router-link>
    <router-link to="/url/zs/20">url传参</router-link>
    <router-link to="/test/lisi/30">重定向到首页</router-link>
    <router-link to="/hahah">alias</router-link> -->
    <router-link to="/test1">test1</router-link>
    <router-link to="/test2/zs/20">test2</router-link>
    <router-link to="/test3/lisi/30">test3</router-link>

    <transition name="fade">
      <router-view></router-view>
    </transition>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{

    }
  },
  methods: {
    goHome(){
      this.$router.push('/index');
    },
    goBack(){
      this.$router.go(-1);
    },
    goNext(){
      this.$router.go(1);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity 2s;
}
.fade-enter-to{
  opacity: 1;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  transition: opacity 2s;
}
.fade-leave-to{
  opacity: 0;
}
</style>
