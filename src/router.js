import {createRouter, createWebHistory} from 'vue-router';
import Payment from './pages/Payment.vue';

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/payment/:id',
      name: 'Payment',
      component: Payment
    }
  ]
})

export { router}