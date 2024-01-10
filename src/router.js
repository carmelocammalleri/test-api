import {createRouter, createWebHistory} from 'vue-router';
import Payment from './pages/Payment.vue';
import Product from '../src/components/Product.vue';
import Home from './components/Home.vue';
import IdView from './pages/checkout/IdView.vue';

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/payment',
      name: 'Payment',
      component: Payment
    },
    {
      path: '/products',
      name: 'Product',
      component: Product
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/viewId/:id',
      name: 'IdView',
      component: IdView
    }
  ]
})

export { router}