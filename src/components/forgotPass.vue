<template>
<div class="forgot d-flex justify-center align-center">
  <header-1 />
<v-container >
   <v-row class="align-content-center justify-center">
      <v-col lg="6">
        <v-card elevation="5" class="pa-5 mx-15">
          <v-card-title class="justify-center">FORGOT PASSWORD</v-card-title>
          <v-form ref="form" v-model="valid" lazy-validation>

            <v-text-field
              v-model="email"
              :rules="emailRules"
              append-icon = 'mdi-email'
              label="E-mail"
              color="black"
              required
            ></v-text-field>

            <v-text-field
              v-model="password"
              label="Your Password"
              disabled
            ></v-text-field>
            <v-row class="justify-center my-4">
              <v-btn
                :disabled="!valid"
                color="primary"
                width="25%"
                class="mx-10 "
                @click="forgot"
              >
                CHECK
              </v-btn>
            </v-row>
            <v-row justify="center">
              <p>If you want to login <router-link to="/login">Click Here</router-link></p>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
</v-container>
</div>
</template>

<script>
import Header1 from './Header1.vue';
export default {
  components: { Header1 },
  name: "login",
  data(){
    return{
      valid: true,
      email:"",
      password:"",
      emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    }
  },
  methods:{
    forgot(){
        const keys = Object.keys(localStorage);
        var check=true
        for (let key of keys) {
          if(key===this.email)
          {
            check=false
            const pass=(JSON.parse(localStorage.getItem(key)).password)
            this.password=pass
          }
        }
        if(check===true){
          alert("Your email dosen't exist")
        }
      }
    }
};
</script>

<style>
a{
  text-decoration: none;
  font-weight: bold;
}
.forgot{
    background-image: url("https://img.freepik.com/free-vector/e-commerce-icon-robotic-hand-internet-shopping-online-purchase-add-cart_127544-586.jpg?size=626&ext=jpg");
  padding: 0px;
  margin: 0px;
  /* Full height */
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>