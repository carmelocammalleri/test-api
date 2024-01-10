<script >
  import axios from 'axios';
  import { store } from '../data/store';

  export default {
    name: 'Product',
    data(){
      return{
        store
      }
    },
    methods:{
      getProduct(){
        axios.get('http://127.0.0.1:8000/api/products')
          .then(results => {
            store.products= results.data.data;
          })
      }
    },
    mounted(){
      this.getProduct()
    }
  }
</script>

<template>
 <h1>Prodotti</h1>
 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, facere! Distinctio reiciendis consectetur voluptatibus? Necessitatibus eveniet, nam eligendi optio tempore illum. Voluptates quo facilis quisquam voluptate natus, fugiat minima obcaecati voluptas fugit qui quis id vitae reprehenderit esse nulla numquam, est necessitatibus laudantium! Maiores accusamus hic expedita voluptatem, dolor excepturi?</p>

 <!-- products -->
 <div class="container d-flex justify-content-between">
   <div v-for="product in store.products" class="card d-flex m-2">
      <img :src="product.img" class="card-img-top" :alt="product.name">
     <div class="card-body">
       <h5 class="card-title">{{ product.name }}</h5>
       <p class="card-text">{{ product.description }}</p>
       <p class="card-text">{{ product.price }}€</p>
       <router-link :to="{name: 'Payment', params: {id: product.id}}" class="btn btn-primary ">paga con graffa</router-link>
     </div>
   </div>
 </div>


 
</template>

<style>

</style>
