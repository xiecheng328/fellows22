import Vue from 'vue'
import Router from 'vue-router'
import MovieList from '@/components/movie/movieList'

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
      }

  ]
})
