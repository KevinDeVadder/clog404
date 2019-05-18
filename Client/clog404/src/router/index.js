import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'

import Shipments from '@/components/Shipments/index'

import AccessDenied from '@/components/AccessDenied'

Vue.use(Router)

let router =  new Router({
  routes: [
    {
      path: '*',
      redirect: '/login',
    },
    {
      path: '/accessdenied',
      name: 'Denied',
      component: AccessDenied
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        guest: true
      }
    },
    {
      path: '/shipments',
      name: 'Shipments',
      component: Shipments,
      meta: {
        // guest: true
      }
    },
  ]
})

router.beforeEach((to, from, next)=>{
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('jwt') == null) {
        next({name: 'Login'})
    } 
    else {
      let user = JSON.parse(localStorage.getItem('user'))
      if(to.matched.some(record => record.meta.driver)) {
        if(user.status == 0){
          next()
        }
        else{
          next({ name: 'Denied'})
        }
      }
      else if(to.matched.some(record => record.meta.furnizor)){
        if(user.status == 1){
          next()
        }
        else{
          next({ name: 'Denied'})
        }
      }
      else if(to.matched.some(record => record.meta.client)){
        if(user.status == 2){
          next()
        }
        else{
          next({ name: 'Denied'})
        }
      }
      else if(to.matched.some(record => record.meta.sys_admin)){
        if(user.status == 3){
          next()
        }
        else{
          next({ name: 'Denied'})
        }
      }
      else {
        next()
      }
    }
  }
  else if(to.matched.some(record => record.meta.guest)) {
    if(localStorage.getItem('jwt') === null){
      next()
    }
    else{
      // next({ name: ''})
    }
  }
  else {
    next() 
  }
})

export default router