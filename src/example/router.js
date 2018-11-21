import Vue from 'vue'
import Router from 'vue-router'
import list from './list'
import button from './button/button'
import card from './card/card'
import grid from './grid/grid'
import header from './header/header'
import lazyload from './lazyload/lazyload'
import listItem from './listItem/listItem'
import loadmoredown from './loadmore/loadmoredown'
import loadmoreup from './loadmore/loadmoreup'
import navbar from './navbar/navbar'

Vue.use(Router)

export default new Router({
    routes: [
        {
          path: '/',
          name: 'list',
          component: list
        },
        {
          path: '/button',
          name: 'button',
          component: button
        },
        {
          path: '/card',
          name: 'card',
          component: card
        },
        {
          path: '/grid',
          name: 'grid',
          component: grid
        },
        {
          path: '/header',
          name: 'header',
          component: header
        },
        {
          path: '/lazyload',
          name: 'lazyload',
          component: lazyload
        },
        {
          path: '/listItem',
          name: 'listItem',
          component: listItem
        },
        {
          path: '/loadmoredown',
          name: 'loadmoredown',
          component: loadmoredown
        },
        {
          path: '/loadmoreup',
          name: 'loadmoreup',
          component: loadmoreup
        },
        {
          path: '/navbar',
          name: 'navbar',
          component: navbar
        }
    ]
})