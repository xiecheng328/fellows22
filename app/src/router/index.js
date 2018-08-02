import Vue from 'vue'
import Router from 'vue-router'
import MovieList from '@/components/movie/MovieList'
import MusicList from '@/components/music/MusicList'
import Book from '@/components/book/Book'
import PhotoList from '@/components/photo/PhotoList'
import movieDetail from '@/components/movie/movieDetail'
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
      },
      {
        path:'/book',
        component:Book
      },
      {
        path:'/photo/photoList',
        component:PhotoList
      },
      {
        path:'/movie/movieDetail',
        component:movieDetail
      }


  ]
})
