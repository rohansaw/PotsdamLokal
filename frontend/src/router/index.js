import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Dashboard from '@/components/home/Dashboard'
import StartPage from '@/views/StartPage'
import ShopsOverview from '@/views/ShopsOverview'
import ShopCreationForm from '@/components/shops/CreateShop'

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
      path: '/dashboard',
      name: 'Dashbaord',
      component: Dashboard
    },
    {
      path: '/create-shop',
      name: 'CreateShop',
      component: ShopCreationForm
    }
  ]
})

export default router
