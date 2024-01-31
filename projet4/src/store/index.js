import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  
  state: {
    products: []
  },
  
  getters: {
  },
  
  mutations: {
    setProducts(state, allProducts) {
      state.products = allProducts;
    }
  },
  
  actions: {
    loadItems(context) {
      axios.get('https://fakestoreapi.com/products')
      .then(response => {
        context.commit('setProducts', response.data);
        console.log(response.data);
      })
    }
  }
})
