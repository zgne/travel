import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/pages/home/Home'
// import City from '@/pages/city/City'
// import Detail from '@/pages/detail/Detail'

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: resolve => require(['@/pages/home/Home'],resolve)
    },{
      path: '/city',
      name: 'City',
      component: resolve => require(['@/pages/city/City'],resolve)
    },{
      path: '/detail/:id',
      name: 'Detail',
      component: resolve => require(['@/pages/detail/Detail'],resolve)
    },{
      path: '/order',
      name: 'OrderForm',
      component: resolve => require(['@/pages/order/OrderForm'],resolve)
    },{
      path: '/user',
      name: 'User',
      component: resolve => require(['@/pages/user/User'],resolve)
    },
    {
      path: '/register',
      name: 'UserRegister',
      component: resolve => require(['@/pages/user/components/Register'],resolve)
    },
    {
      path: '/login',
      name: 'LogIn',
      component: resolve => require(['@/pages/user/components/LogIn'],resolve)
    }
  ],
  scrollBehavior(to, from, savedPosition) {
  return {x: 0, y: 0}
  }
})
