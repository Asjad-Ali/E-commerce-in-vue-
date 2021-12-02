<template>
  <v-app>
    <header-2 />
    <v-main class="pa-2">
    <all-product />
    </v-main>
  </v-app>
</template>

<script>
import AllProduct from '../components/allProduct.vue';
import header2 from '../components/header2.vue';
import {mapState} from 'vuex'


export default {
  components: { 
    header2, 
    AllProduct 
    },
  name: "Home",
  data(){
    return{
      show: false,
  
    }
  },

  computed:{
    ...mapState([
      'msg',
      'allProducts'
    ])
  },


};
</script>
