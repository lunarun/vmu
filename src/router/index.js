import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import VButton from '@/components/demo/button'
import VList from '@/components/list/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/button',
      name: 'VButton',
      component: VButton
    },
    {
      path: '/list',
      name: 'VList',
      component: VList
    }
  ]
})
