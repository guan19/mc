import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import Reg from './views/Reg'
import Login from './views/Login'
import Products from './views/Products'
import Details from './views/Details'
import Cart from './views/Cart'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/", 
      component:Index
    }, 
    {
      name:'Reg',
      path:"/reg",
      component:Reg
    },    
    {
      name:'Login',
      path:"/login",
      component:Login
    },   
    {
      name:'Products',
      path:"/products",
      component:Products
    },
    {
      name:'Details',
      path:'/details',
      component:Details
    },
    {
      name:'Cart',
      path:'/cart',
      component:Cart
    }
  ]
})
