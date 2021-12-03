<template>
<v-container >
    <v-app-bar app
      color="primary"
    >

      <v-app-bar-nav-icon
      class="white--text"
       @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="white--text pa-0">
        <span class="font-weight-light">Shopping</span>
        <span >Mall</span>
      </v-toolbar-title>


      <v-spacer></v-spacer>

      <v-badge
      left
      overlap  
      color="red"
      :content="sCartProduct.length"
      class="d-flex  mt-2"
    >
    <v-btn text small router to="/cart">
        <v-icon color="white" size="30">mdi-cart</v-icon>
    </v-btn>
    </v-badge>
    </v-app-bar >



    <!--       =============>  Side bar  <================ -->

    <v-navigation-drawer
    class="pa-3"
      v-model="drawer"
      fixed
      temporary
    >
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="../assets/profile.jpg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title ><a @click="route('profile')"><b>{{loginuser}} </b></a></v-list-item-title>
            <v-list-item-subtitle class="success--text">Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>
      <div class="listitem">

      <v-list dense >
        <v-list-item
          
          v-for="item in items"
          :key="item.title"
          @click="route(item.route)"
        >
          <v-list-item-icon class="me-3 d-flex align-center">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title style="font-size:16px">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      </div>
      <v-spacer></v-spacer>
    </v-navigation-drawer>

</v-container>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name:"Header2",
data(){
    return{
      loginuser:"",
      drawer:false,
        items: [
        { title: 'Homepage', icon: 'mdi-collage', route: "Home" },
        { title: 'Category', icon: 'mdi-shape', route: "category" },
        { title: 'cart', icon: 'mdi-cart', route: "cart" },
        { title: 'About Us', icon: 'mdi-account-group-outline', route: "about" },
        { title: 'Logout', icon: 'mdi-logout', route: "login" },
      ],
  }
},
methods:{
  route(rout){
    this.$router.push({name: rout})
  }
},
  computed: {
    ...mapState(["sCartProduct"]),
  },
mounted(){
  let getloginuser = localStorage.getItem('loginUser')
  let loginObject = JSON.parse(localStorage.getItem(getloginuser))
  this.loginuser = loginObject.name.firstname+ " "+loginObject.name.lastname
},


}
</script>

<style>
.menulist{
  color: white;
}
.listitem :hover{
  font-weight: bolder !important;
  color: #1976D2 !important;
}
</style>