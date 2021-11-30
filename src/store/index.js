import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      msg:"i am Store",
      allProducts: [],
      allUsers:[],
      sProduct:[],
      productCategory:[],
      specificCategory:[]
  },
  mutations: {
    getAllProduct(state,products){
        state.allProducts=products
        
    },
    getAllUser(state,users){
      state.allUsers=users
    },
  getSingleProduct(state,sproduct) {
    state.sProduct=sproduct;
  },
  getProductCategory(state,pcategory) {
    state.productCategory=pcategory;
  },
  getSpecificCategory(state,pcategory) {
    state.specificCategory=pcategory;
  },
  },

  actions: {
    loadAllProduct({commit}) {
          axios.get('https://fakestoreapi.com/products')
          .then(res =>{
              let product=res.data;
              // console.log(product)
              commit('getAllProduct',product)
          })
          .catch(error => {
              console.log(error)
          })
      },

      loadAllUser({commit}) {
        axios.get('https://fakestoreapi.com/users')
        .then(res =>{
            let user=res.data;
            console.log(user)
            for(let index in user) {
              // console.log(user[index])
              localStorage.setItem(user[index].email,JSON.stringify(user[index]));
            }
            commit('getAllUser',user)
        })
        .catch(error => {
            console.log(error)
        })
    },

    loadSingleProduct({commit},payload) {
      console.log(payload);
    axios.get(`https://fakestoreapi.com/products/${payload}`)
      .then(res =>{
          let sproduct=res.data;
          // console.log(sproduct);
          commit('getSingleProduct',sproduct)
      })
      .catch(error => {
          console.log(error)
      })
    },

    loadProductCategory({commit}) {
      axios.get('https://fakestoreapi.com/products/categories')
      .then(res =>{
          let pcateogry=res.data;
          // console.log(pcateogry)
          commit('getProductCategory',pcateogry)
      })
      .catch(error => {
          console.log(error)
      })
  },

  loadSpecificCategory({commit},payload) {
    console.log(payload)
    axios.get(`https://fakestoreapi.com/products/category/${payload}`)
    .then(res =>{
        let sppcateogry=res.data;
        console.log(sppcateogry)
        commit('getSpecificCategory',sppcateogry)
    })
    .catch(error => {
        console.log(error)
    })
},



  },
  modules: {
  }
})
