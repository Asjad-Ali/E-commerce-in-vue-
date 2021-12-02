<template v-slot:action="{ attrs }">
  <v-container>
    <header-2 />
    <v-container>
      <v-row justify="center" class="d-flex flex-row">
      <v-col cols="6" lg="6">
        <v-card class="d-flex flex-column justify-space-between">
          <v-container>
            <v-img contain :src="sProduct.image" height="auto"></v-img>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="6" lg="6">
        <v-card class="d-flex flex-column justify-space-between pa-3">
          <v-card-title> {{ sProduct.title }} </v-card-title>
          <v-card-subtitle>
            {{ sProduct.rating.count }} Product are available
          </v-card-subtitle>

          <v-row align="center" class="mx-4">
            <v-rating
              :value="sProduct.rating.rate"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>
            <div class="grey--text ms-4">
              {{ sProduct.rating.rate }} ({{ sProduct.rating.count }})
            </div>
          </v-row>
          <v-spacer></v-spacer>
          <v-row class="px-5 pt-5">
            <v-col cols="3">
              <h4>Price</h4>
            </v-col>
            <v-col>
              <h5 >${{ sProduct.price }}</h5>
            </v-col>
          </v-row>
          <v-spacer></v-spacer>
          <v-row class="px-5 pt-5">
            <v-col>
              <h4>Category</h4>
            </v-col>
            <v-col cols="9">
              <h5>{{ sProduct.category }}</h5>
            </v-col>
          </v-row>
          <v-spacer></v-spacer>
          <v-row class="px-5 py-5">
            <v-col cols="3">
              <h4>Description</h4>
            </v-col>
            <v-col cols="9">
              <h5>{{ sProduct.description }}</h5>
            </v-col>
          </v-row >
            <v-row class="my-2 justify-center" >
        <v-snackbar
        top
        v-model="snackbar"
        :timeout="timeout"
      >
        <h3>Your product added in cart successfully</h3>
      </v-snackbar>
          <v-btn v-bind="attrs" @click="addToCart(sProduct.id)" class="ma-2" color="success">Add to Cart</v-btn>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    </v-container>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import header2 from "./header2.vue";
export default {
  components: { header2 },
  name: "productInfo",
  data(){
    return{
    snackbar: false,
    text: 'Add in cart successfully',
    timeout: 2000,
    }
  },
  computed: {
    ...mapState(["sProduct"]),
  },
  methods:{
        addToCart(id){
      // alert("Add to cart "+id)
      this.snackbar=true
        this.$store.dispatch('loadAddTocart',id)
    },
  },
  mounted() {
    this.$store.dispatch("loadSingleProduct");
  },
};
</script>

<style>
</style>