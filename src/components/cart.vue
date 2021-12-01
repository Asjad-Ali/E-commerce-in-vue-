<template>
  <v-app>
      <header-2 />
      <v-main>
          <v-container>
            <v-card class="pa-5 d-flex">
              <v-row class="d-flex justify-space-around">
                  <v-col cols="5">Asjad ali</v-col>
                  <v-col cols="4">price</v-col>
                  <v-col cols="3">sdafdf</v-col>
              </v-row>
          </v-card>
          </v-container>
      </v-main>
  </v-app>
</template>

<script>
// import { mapState } from 'vuex'
import header2 from './header2.vue'
export default {
  components: { header2 },
  data(){
      return{

      }
  },
//   computed:{
//       ...mapState(['sCartProduct'])
//   }

}
</script>

<style>

</style>