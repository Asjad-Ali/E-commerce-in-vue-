<template>
  <v-app>
    <header-2 />
    <v-main>
      <v-container v-for="item in sCartProduct" :key="item.index">
        <v-card class="px-10 py-2 d-flex" elevation="5">
          <v-row  class="d-flex align-center justify-center">
            <v-col cols="2">
              <!-- <img  alt=""> -->
              <v-avatar size="150">
                <img :src="item.image" alt="" />
              </v-avatar>
            </v-col>
            <v-col cols="8" class="pe-3">
              <v-row >
                <v-col cols="12"
                  ><h4>{{ item.title }}</h4>
                  </v-col>
              </v-row>
                <v-row>
                <v-col cols="12"
                  ><p>{{ item.description }}</p>
                  </v-col>
              </v-row>
            </v-col>
            <v-col cols="2" class="ps-10 d-flex flex-column">
              <v-row>
                <v-col cols="6"><h4>Price </h4> ${{ item.price }}</v-col>
                <v-col cols="6" ><v-btn text class="mt-2 me-2"><v-icon color="red" size="40">mdi-delete</v-icon>
                </v-btn></v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import header2 from "./header2.vue";
export default {
  components: { header2 },
  data() {
    return {
    };
  },
  computed: {
    ...mapState(["sCartProduct"]),
  },
};
</script>

<style>
</style>