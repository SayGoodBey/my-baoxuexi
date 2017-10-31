import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/Index'
import Regist from '@/components/Regist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/regist',
      name: 'zhuce',
      component: Regist
    }

  ]
})
