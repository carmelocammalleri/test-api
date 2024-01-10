import { reactive } from 'vue';

export const store = reactive({
  apiUrl:'https://api.tomtom.com/search/2/geocode/',
  key: '&key=mqY8yECF75lXPuk7LVSI3bFjFtyEAbEX',
  countrySet: '.json?countrySet=IT',
  products: []
});