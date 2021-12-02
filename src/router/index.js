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
import foter from '../components/foter.vue'
import landingpage from '../components/landingpage.vue'

Vue.use(VueRouter)

function guardMyroute(to, from, next)
{
 var isAuthenticated= false;

if(localStorage.getItem('loginUser'))
  isAuthenticated = true;
 else
  isAuthenticated= false;
 if(isAuthenticated) 
 {
  next(); // allow to enter route
 } 
 else
 {
  next('/login'); // go to '/login';
 }
}



const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    beforeEnter : guardMyroute,
  },
  {
    path: '/',
    name: 'landingpage',
    component: landingpage,
  },

  {
    path: '/foter',
    name: 'foter',
    component: foter
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart,
    beforeEnter : guardMyroute,

  },
  {
    path: '/update',
    name: 'update',
    component: update,
    beforeEnter : guardMyroute,
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile,
    beforeEnter : guardMyroute,
  },
  {
    path: '/productInfo',
    name: 'productInfo',
    component: productInfo,
    beforeEnter : guardMyroute,
  },
  {
    path: '/category',
    name: 'category',
    component: category,
    beforeEnter : guardMyroute,
  },
  {
    path: '/header1',
    name: 'header1',
    component: header1,
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/signup',
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
