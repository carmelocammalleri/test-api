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
    getApi(){ +store.countrySet
      axios.get(store.apiUrl + this.roadSearch + ',' + this.citySearch +store.countrySet + store.key)
        .then(results => {
          console.log(results.data.results);
        })
    }
  }

 }

</script>

<template>
  <input type="text" v-model="citySearch" placeholder="city">

  <input type="text" v-if="this.citySearch.length<3" disabled placeholder="road">
  <input type="text" v-else v-model="roadSearch" placeholder="road">
  <button @click="getApi">invia</button>
</template>

<style>
</style>
