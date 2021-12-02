<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{

    }
  },
  mounted(){
    this.$store.dispatch('loadAllProduct')
    this.$store.dispatch('loadProductCategory')
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
