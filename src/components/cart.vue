<template>
  <v-app>
    <header-2 />
    <v-main>
      <v-container
        class="d-flex justify-center ali"
        v-for="item in getsCartProduct"
        :key="item.index"
      >
        <v-card class="px-2 py-2 d-flex" elevation="5">
          <v-row
            class="
              d-flex
              align-center
              justify-space-around justify-content-center
            "
          >
            <v-col
              class="d-flex align-center justify-center"
              style="margin: 5px"
              cols="12"
              lg="2"
              md="2"
              sm="12"
              xs="12"
            >
              <v-avatar size="200px">
                <img contain :src="item.image" alt="" />
              </v-avatar>
            </v-col>
            <v-col style="margin: 5px" cols="12" lg="7" md="7" sm="12" xs="12">
              <v-row>
                <v-col
                  ><h4>{{ item.title }}</h4>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  ><p>{{ item.description }}</p>
                </v-col>
              </v-row>
            </v-col>
            <v-col style="margin: 5px" cols="12" lg="2" md="2" sm="12" xs="12">
              <v-row>
                <v-col class="d-flex justify-center align-center" cols="8"
                  ><h4>Price</h4>
                  : ${{ item.price }}</v-col
                >
                <v-col class="d-flex justify-center align-center" cols="4"
                  ><v-btn @click="deleteproduct(item.id)" text class="mt-2 me-2"
                    ><v-icon color="red" size="30">mdi-delete</v-icon>
                  </v-btn></v-col
                >
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
      <v-container>
        <v-card class="pa-5" elevation="5">
          <v-row>
            <v-col cols="12" class="d-flex flex-row justify-lg-end">
              <h1>Total Amount : ${{ sCartPrice.toFixed(2) }}</h1>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import header2 from "./header2.vue";
export default {
  name: "cart",
  components: { header2 },
  data() {
    return {};
  },
  computed: {
    ...mapState(["sCartPrice"]),
    ...mapGetters(["getsCartProduct"]),
  },
  // methods:{
  //   deleteproduct(id){
  //     alert(id)
  //     this.$store.dispatch('deleteCartProduct',id)
  //   }
  // }
};
</script>

<style>
</style>