<template>
  <v-app>
      <header-2 />
      <v-main>
    <v-container class="my-20">
    <v-row justify="center">
      <v-col  lg="12" md="12" sm="12" class="text-center" >
        <v-subheader class="text-h4 justify-center">Product Category</v-subheader>
        <p>
          Below show the product category name and click to show the specific category and show
          the product.
        </p>
      </v-col>
    </v-row>
    <v-row class="d-flex">
      <v-col class="d-flex align-lg-space-around flex-row" v-for="scategory in productCategory" :key="scategory.index">
          <v-btn 
          color="primary"
            @click="(getCatogryPro(scategory))"
            class="mx-5"
          >{{scategory}}
          </v-btn>
      </v-col>
    </v-row>
    </v-container>

  <v-container>
      <v-row class="d-flex align-center justify-center">
      <v-col  lg="3" md="6" class="d-flex flex-column align-center">
        <h1 style="text-transform: uppercase">
          {{catagory}}
        </h1>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col
        height="100vh"
        sm="6"
        lg="4"
        v-for="product in specificCategory"
        :key="product.index"
      >
        <v-card
          class="d-flex flex-column justify-md-space-between pa-1"
          elevation="6"
        >
          <v-img contain @click="productDescription(product.id)"
          :src="product.image" 
          height="350px"></v-img>

          <div style="height:3rem" class="d-flex align-center mx-4 mt-2">
             <h4  @click="productDescription(product.id)" > {{ product.title }} </h4>
          </div>
          <v-card-subtitle>
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
              {{ product.rating.rate }} ({{ product.rating.count }})
            </div>
          </v-row>

          <v-divider class="mt-4"></v-divider>
          <v-spacer></v-spacer>
        </v-card>
      </v-col>
    </v-row>
  </v-container>



    
      </v-main>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import header2 from "./header2.vue";
export default {
  name:"category",
  components: { header2 },
  data() {
    return {
      catagory: "",
      type:"",
    };
  },
  computed: {
    ...mapState(["productCategory"]),
    ...mapState(["specificCategory"]),
  },

  methods: {
    getCatogryPro(scategory) {
      this.type="click"
      this.catagory=scategory
      this.$store.dispatch("loadSpecificCategory", scategory);
    },

    productDescription(id){
       this.$store.dispatch('loadSingleProduct',id)
       this.$router.push("/productInfo")
    },
  },

};
</script>

<style>
</style>