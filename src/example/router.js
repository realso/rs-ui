import Vue from 'vue'
import Router from 'vue-router'
import button from './button/button'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'button',
        component: button
    }]
})