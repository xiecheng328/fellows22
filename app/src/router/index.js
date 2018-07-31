import Vue from 'vue'
import Router from 'vue-router'
import MovieList from '@/components/movie/MovieList'
import MusicList from '@/components/music/MusicList'
Vue.use(Router)

export default new Router({
  routes: [
      {
        path:'/',
        redirect:'/movie/movieList'
      },
      {
        path:'/movie/movieList',
        component:MovieList
      },
      {
        path:'/music/musicList',
        component:MusicList
      }

  ]
})
