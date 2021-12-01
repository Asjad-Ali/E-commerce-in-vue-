import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import header1 from '../components/Header1.vue'
import login from '../components/login.vue'
import signup from '../components/signup.vue'
import forgotPass from '../components/forgotPass.vue'
import category from '../components/category.vue'
import productInfo from '../components/productInfo.vue'
import profile from '../components/profile.vue'
import update from '../components/update.vue'
import cart from '../components/cart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart
  },
  {
    path: '/update',
    name: 'update',
    component: update
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile
  },
  {
    path: '/productInfo',
    name: 'productInfo',
    component: productInfo
  },
  {
    path: '/category',
    name: 'category',
    component: category
  },
  {
    path: '/header1',
    name: 'header1',
    component: header1
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/',
    name: 'signup',
    component: signup
  },
  {
    path: '/forgotPass',
    name: 'forgotPass',
    component: forgotPass
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
