<template>
  <v-app class="pa-2">
    <v-main>
      <!-- <v-btn ><router-link id="signup" to="/signup">Signup</router-link></v-btn> <br>
      <router-link to="/">Home</router-link><br>
      <router-link  to="/header1">Header1</router-link><br>
      <router-link  to="/signup">signup</router-link><br>
      <router-link  to="/login">login</router-link><br>
      <router-link  to="/sample">sample</router-link><br>
      <router-link  to="/forgotPass">forgotPass</router-link><br>
      <router-link  to="/sample2">sample2</router-link><br> -->
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
