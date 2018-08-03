// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/common.css'
import '@/assets/rem.js'
import store from '@/vuex/store'
import VueTouch from 'vue-touch'

Vue.config.url = 'https://bird.ioliu.cn/v1?url=';
Vue.config.productionTip = false
Vue.use(VueTouch, {name: 'v-touch'})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
