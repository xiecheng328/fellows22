import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import List from '@/components/List'
import SubList1 from '@/components/SubList1'
import SubList2 from '@/components/SubList2'
import Url from '@/components/Url'
import Error from '@/components/Error'
import Test1 from '@/components/Test1'
import Test2 from '@/components/Test2'
Vue.use(Router)

export default new Router({
  mode:'hash',
  routes: [
    {
      path:'/test1',
      component:Test1
    },
    {
      path:'/test2/:username/:userid',
      name:'test1',
      component:Test2
    },
    {
      path:'/test3/:username/:userid',
      redirect:'/test2/:username/:userid'
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      beforeEnter(to,from,next){
        console.log(to);
        console.log(from);
        // console.log(next);

        next();

      }
    },
    {
      path: '/list',
      name: 'HelloWorld',
      component: List,
      children:[
        {
          path: '/list/subList1',
          name:'subList1',
          component:SubList1
        },
        {
          path: '/list/subList2',
          component:SubList2
        }
      ]
    },
    {
      path:'/url/:usename/:age',
      component:Url
    },{
      path:'/testurl/:age/:name',
      component:Url
    },
    {
      path:'/test/:usename/:age',
      redirect:'/url/:usename/:age'
    },{
      path:'/index',
      component: Index,
      alias:'/home'
    },{
      path:'*',
      component:Error
    }
  ]
})
