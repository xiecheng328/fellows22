import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import List from '@/components/List'
import SubList1 from '@/components/SubList1'
import SubList2 from '@/components/SubList2'
import Url from '@/components/Url'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'HelloWorld',
      component: Index
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
    }
  ]
})
