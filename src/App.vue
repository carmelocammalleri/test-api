<script>
  import Header from './components/partials/Header.vue';
  import axios from 'axios';
  import { store } from './data/store';

  export default {
    name:'App',
    components:{
      Header
    },
    data(){
      return{
        citySearch: '',
        roadSearch: '',
        store
      }
    },
    methods:{
      getApi(){
        axios.get(store.apiUrl + this.roadSearch + ',' + this.citySearch +store.countrySet + store.key)
          .then(results => {
            console.log(results.data.results);
          })
      }
    }
  }
</script>

<template>
  <!-- input city-->
  <input type="text" v-model="citySearch" placeholder="city">
  <input type="text" :disabled="this.citySearch.length<3" v-model="roadSearch" placeholder="road">
  <button @click="getApi">invia</button>


  <Header/>
  <div class="container">
    <RouterView/>
  </div>




  
  



</template>

<style>

</style>
