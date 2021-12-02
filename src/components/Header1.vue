<template>
<div>
      <v-app-bar
      app
      color="primary"
      light
      elevation="6"
      >
      <v-toolbar-title class="white--text" title="lg">
        <span class="font-weight-light">Shopping</span>
        <span >Mall</span>
      </v-toolbar-title>
      <v-spacer />
        <v-btn class="mr-5"  color="white"><router-link to="/signup">SIGNUP</router-link></v-btn>
        <v-btn class="menulist"  color="white"><router-link to="/login">LOGIN</router-link></v-btn>
      </v-app-bar>
</div>
</template>

<script>
export default {
  name:"Header1",
  data(){
    return{
      drawer:true
    }
  }
}

</script>

<style>

</style>