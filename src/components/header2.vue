<template>
<v-container>
    <v-app-bar app
      color="primary"
    >
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->

      <v-toolbar-title>
        <span class="font-weight-light">Shopping</span>
        <span >Mall</span>
      </v-toolbar-title>

      <v-btn router to="/Home"
      text class="white--text ms-3 ">
        <span>HOME</span>
      </v-btn>
      <v-btn router to="/category"
      text class="white--text mx-2">
        <span>CATEGORY</span>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon class="white--text">
        <v-icon>mdi-cart</v-icon>
      </v-btn>

      <v-btn icon class="white--text">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>


<div class="text-center">
    <v-menu offset-y open-on-hover>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          text
          class="white--text"
          v-bind="attrs"
          v-on="on"
        >
        <v-icon>mdi-chevron-down</v-icon>
          {{loginuser}}
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title ><v-btn router :to="item.route">{{ item.title }}</v-btn></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
    </v-app-bar>

</v-container>
</template>

<script>
export default {
  name:"Header2",
data(){
    return{
      loginuser:"",
        items: [
        { title: 'Profile', route: "/category" },
        { title: 'Update', route: "/category"  },
        { title: 'logout', route: "/login" },
      ],
  }
},
mounted(){
  let getloginuser = localStorage.getItem('loginUser')
  let loginObject = JSON.parse(localStorage.getItem(getloginuser))

  this.loginuser = loginObject.name.firstName+ " "+loginObject.name.lastName
}


}
</script>

<style>
.menulist{
  color: white;
}
</style>