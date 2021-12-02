<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
      <fotr />
  </v-app>
</template>

<script>
import foter from './components/foter.vue'
export default {
  components:{
    fotr: foter
  },
  name: 'App',
  data(){
    return{
    }
  },
  mounted(){
    this.$store.dispatch('loadAllProduct')
    this.$store.dispatch('loadProductCategory')
    this.$store.dispatch('loadAllUser')
  }
};
</script>

<style scoped>
#signup{
  text-decoration: none;
  color: red;
}
p,a{
  text-decoration: none;
}
</style>
