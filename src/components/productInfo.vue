<template>
  <v-container>
    <header-2 />
    <v-container>
          <v-row justify="center" class="d-flex flex-row">
      <v-col lg="6">
        <v-card class="d-flex flex-column justify-space-between pa-3">
          <v-container>
            <v-img :src="sProduct.image" height="auto"></v-img>
          </v-container>
        </v-card>
      </v-col>

      <v-col lg="6">
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
  computed: {
    ...mapState(["sProduct"]),
  },
  mounted() {
    this.$store.dispatch("loadSingleProduct");
  },
};
</script>

<style>
</style>