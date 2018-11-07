import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import baobiaochaxun from '@/components/baobiaochaxun'
import MessageBox from '@/components/message'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/baobiaochaxun',
      name: 'baobiaochaxun',
      component: baobiaochaxun
    },
    {
      path: '/MessageBox',
      name: 'MessageBox',
      component: MessageBox
    }
  ]
})
