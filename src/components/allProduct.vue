<template>
  <v-container>
    <carousel />
    <div  class="d-flex align-center justify-center py-10"
        height="100vh"
        sm="6"
        lg="4"
      >
      <h1>All Products</h1>
      </div>
    <v-row justify="center">
      <v-col
        height="100vh"
        sm="6"
        lg="4"
        v-for="product in getAllProducts"
        :key="product.index"
      >
        <v-card 
          class="d-flex flex-column justify-md-space-between pa-1"
          elevation="6"
        >
        <v-skeleton-loader
          v-bind="attrs"
          type="card-avatar, article, actions"
        >
          <v-img @click="productDescription(product.id)"
          :src="product.image" 
          height="350px" contain></v-img>
        </v-skeleton-loader>

          <div style="height:3rem" class="d-flex align-center mx-4 mt-2">
             <h4  @click="productDescription(product.id)" > {{ product.title }} </h4>
          </div>
          <v-card-subtitle class="d-flex">
            {{ product.rating.count }} Product are available
          </v-card-subtitle>

          <v-row align="center" class="mx-4">
            <v-rating
              :value="product.rating.rate"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>
            <div class="grey--text ms-4">
              {{ product.rating.rate }}
            </div>
          </v-row>



          <v-divider class="mt-4"></v-divider>
          <v-spacer></v-spacer>
        </v-card>
      </v-col>
    </v-row>

    <div class="text-center my-6">
    <v-pagination
      v-model="page"
      :length="4"
    ></v-pagination>
  </div>
  </v-container>

</template>

<script>
import { mapGetters } from "vuex";
import carousel from './carousel.vue';

export default {
  components: { carousel },
  name: "allProduct",
  data() {
    return {
      show: false,
      page: 1
    };
  },

  computed: {
    ...mapGetters(["getAllProducts"])
  },
  methods:{
    productDescription(id){
       this.$store.dispatch('loadSingleProduct',id)
       this.$router.push("/productInfo")
    },
    addToCart(id){
      // alert("Add to cart "+id)
        this.$store.dispatch('loadAddTocart',id)
    },
  },

};
</script>

<style>
</style>