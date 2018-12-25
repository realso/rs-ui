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
import messageBox from './message-box/message-box'
import navbar from './navbar/navbar'
import tabbar from './tabbar/tabbar'
import picker from './picker/picker'
import spinner from './spinner/spinner'
import datetime from './datetime/datetime'
import indicator from './indicator/indicator'
import numInput from './numInput/numInput'
import imageUpload from './imageUpload/imageUpload'
import field from './field/field'
import checkbox from './checkbox/checkbox'
import accordion from './accordion/accordion'

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
          path: '/messageBox',
          name: 'messageBox',
          component: messageBox
        },
        {
          path: '/navbar',
          name: 'navbar',
          component: navbar
        },
        {
          path: '/tabbar',
          name: 'tabbar',
          component: tabbar
        },
        {
          path: '/picker',
          name: 'picker',
          component: picker
        },
        {
          path: '/datetime',
          name: 'datetime',
          component: datetime
        },
        {
          path: '/spinner',
          name: 'spinner',
          component: spinner
        },
        {
          path: '/indicator',
          name: 'indicator',
          component: indicator
        },
        {
          path: '/numInput',
          name: 'numInput',
          component: numInput
        },
        {
          path: '/imageUpload',
          name: 'imageUpload',
          component: imageUpload
        },
        {
          path: '/field',
          name: 'field',
          component: field
        },
        {
          path: '/checkbox',
          name: 'checkbox',
          component: checkbox
        },
        {
          path: '/accordion',
          name: 'accordion',
          component: accordion
        }
    ]
})