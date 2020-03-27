import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/auth/Login'
import Dashboard from '@/components/home/Dashboard'
import StartPage from '@/views/StartPage'
import ShopsOverview from '@/views/ShopsOverview'
import Register from '@/components/auth/Register'
import RegisterShop from '@/components/auth/RegisterShop'
import SellPage from '@/views/SellOverview'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'StartPage',
      component: StartPage
    },
    {
      path: '/shops',
      name: 'Shops',
      component: ShopsOverview
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/register-shop',
      name: 'RegisterShop',
      component: RegisterShop
    },
    {
      path: '/dashboard',
      name: 'Dashbaord',
      component: Dashboard
    },
    {
      path: '/sell',
      name: 'SellPage',
      component: SellPage
    }
  ]
})

export default router
