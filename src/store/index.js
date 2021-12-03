import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allProducts: [],
    allUsers: [],
    sProduct: [],
    sCartProduct: [],
    sCartPrice: 0,
    productCategory: [],
    specificCategory: []
  },
  mutations: {
    getAllProduct(state, products) {
      state.allProducts = products

    },
    getAllUser(state, users) {
      state.allUsers = users
    },
    getSingleProduct(state, sproduct) {
      state.sProduct = sproduct;
    },
    getSingleCartProduct(state, sproduct) {
      state.sCartProduct.push(sproduct);
      console.log("Add to cart")
      console.log(state.sCartProduct)
    },
    getProductCategory(state, pcategory) {
      state.productCategory = pcategory;
    },
    getSpecificCategory(state, pcategory) {
      state.specificCategory = pcategory;
    },
  },

  actions: {
    loadAllProduct({ commit }) {
      axios.get('https://fakestoreapi.com/products')
        .then(res => {
          let product = res.data;
          // console.log(product)
          commit('getAllProduct', product)
        })
        .catch(error => {
          console.log(error)
        })
    },

    loadAllUser({ commit }) {
      axios.get('https://fakestoreapi.com/users')
        .then(res => {
          let user = res.data;
          for (let index in user) {
            // console.log(user[index])
            localStorage.setItem(user[index].email, JSON.stringify(user[index]));
          }
          commit('getAllUser', user)
        })
        .catch(error => {
          console.log(error)
        })
    },

    loadSingleProduct({ commit }, payload) {
      console.log(payload);
      axios.get(`https://fakestoreapi.com/products/${payload}`)
        .then(res => {
          let sproduct = res.data;
          // console.log(sproduct);
          commit('getSingleProduct', sproduct)
        })
        .catch(error => {
          console.log(error)
        })
    },

    loadAddTocart({ commit }, payload) {
      console.log(payload);
      axios.get(`https://fakestoreapi.com/products/${payload}`)
        .then(res => {
          let sproduct = res.data;
          let price = Number(sproduct.price)
          this.state.sCartPrice = Number(this.state.sCartPrice + price)
          console.log(this.state.sCartPrice);
          commit('getSingleCartProduct', sproduct)
        })
        .catch(error => {
          console.log(error)
        })
    },



    loadProductCategory({ commit }) {
      axios.get('https://fakestoreapi.com/products/categories')
        .then(res => {
          let pcateogry = res.data;
          // console.log(pcateogry)
          commit('getProductCategory', pcateogry)
        })
        .catch(error => {
          console.log(error)
        })
    },

    loadSpecificCategory({ commit }, payload) {
      console.log(payload)
      axios.get(`https://fakestoreapi.com/products/category/${payload}`)
        .then(res => {
          let sppcateogry = res.data;
          console.log(sppcateogry)
          commit('getSpecificCategory', sppcateogry)
        })
        .catch(error => {
          console.log(error)
        })
    },
    // deleteCartProduct(payload){
    //   for(let item in this.state.sCartProduct)
    //   {
    //     if(this.state.sCartProduct[item].id==payload)
    //     {
    //       this.state.sCartProduct[item].splice(payload, 1).concat(this.state.sCartProduct[item].slice(-payload));
    //     }
       
    //   }
    // }



  },
  getters: {
    getAllProducts(state) {
      return state.allProducts
    },
    getproductCategory(state) {
      return state.productCategory
    },
    getspecificCategory(state) {
      return state.specificCategory
    },
    getsCartProduct(state) {
      return state.sCartProduct
    },

  }
})
