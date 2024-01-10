<script>
import axios from 'axios';
import { store } from './data/store';

 export default {
  name:'App',
  component:{
  },
  data(){
    return{
      citySearch:'',
      roadSearch:'',
      store
    }
  },
  methods:{
    getApi(){
      axios.get(store.apiUrl + this.roadSearch + ',' + this.citySearch +store.countrySet + store.key)
        .then(results => {
          console.log(results.data.results);
        })
    },
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
  <div class="container">
    <RouterView/>
  </div>

  <!-- input city-->
  <input type="text" v-model="citySearch" placeholder="city">
  <input type="text" :disabled="this.citySearch.length<3" v-model="roadSearch" placeholder="road">
  <button @click="getApi">invia</button>
  
  <!-- products -->
  <div v-for="product in store.products" class="card">
  <img :src="product.img" class="card-img-top" :alt="product.name">
  <div class="card-body">
    <h5 class="card-title">{{ product.name }}</h5>
    <p class="card-text">{{ product.description }}</p>
    <p class="card-text">{{ product.price }}€</p>
    <router-link :to="{name: 'Payment', params: {id: product.id}}" class="bottone">paga con graffa</router-link>
  </div>
</div>



</template>

<style>
.card{
  border: 1px solid gainsboro;
  margin-bottom: 20px;

  img{
    height: 200px;
  }

  .bottone{
    background-color: blueviolet;
    color: white;
    padding: 10px;
    border-radius: 5px;
  }
}
</style>
