import Vue from 'vue'
import Router from 'vue-router'
import MovieList from '@/components/movie/MovieList'
import MusicList from '@/components/music/MusicList'
import Book from '@/components/book/Book'
import PhotoList from '@/components/photo/PhotoList'
import movieDetail from '@/components/movie/MovieDetail'
import musicDetail from '@/components/music/MusicDetail'
import photoDetail from '@/components/photo/PhotoDetail'
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
        path:'/movie/movieDetail/:movieId',
        component:movieDetail
      },
      {
        path:'/music/musicDetail/:musicId',
        component:musicDetail
      },
      {
        path:'/photo/photoDetail/:phohoId',
        component:photoDetail
      }


  ]
})
