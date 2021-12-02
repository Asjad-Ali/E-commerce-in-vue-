<template>
<div class="login d-flex justify-center align-center">
<v-container >
  <header-1 />
  <v-main>
      <v-row class="align-center justify-center">
      <v-col lg="5" md="6" sm="8">
        <v-card elevation="5" class="pa-5">
          <v-card-title class="justify-center">LOGIN</v-card-title>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="email"
              append-icon = 'mdi-email'
              :rules="emailRules"
              label="E-mail"
              required
              outlined
              dense
            ></v-text-field>

            <v-text-field
              v-model="password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'" 
                @click:append="show1 = !show1"
              :rules="passwordRules"
              label="Password"
              required
              outlined
              dense
            ></v-text-field>
            <v-row justify="end">
              
              <a style="font-size:15px;padding:7px 12px 0px 0px"><router-link to="/forgotPass">Forgot Password</router-link></a>
            </v-row>
            <v-row class="justify-center my-4">
              <v-btn
                :disabled="!valid"
                
                color="primary"
                width="25%"
                class="mx-10 "
                @click="login"
              >
                LOGIN
              </v-btn>
            </v-row>
            <v-row justify="center">
              <p>Don't have account <router-link to="/">Click Here</router-link></p>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-main>

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
      show1:false,
      valid: true,
      loginUser:"",
      email:"",
      password:"",
      emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    passwordRules:[
      (v) => !!v || "Password is required",
      (v) => (v.length >= 6) || "Min 6 characters",
      // (v) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$^!$,.#%*?&])[a-zA-Z\d@^,$!%$#*.?&]{8,}$/.test(v) || "Password is not valid Enter password like e.g Asjad@264",      
    ],
    }
  },
  methods:{
    login(){
      if (this.$refs.form.validate()){
        var check=true
        const keys = Object.keys(localStorage);
        for (let key of keys) {
          if(key==this.email)
          {
            check=false
            const pass=(JSON.parse(localStorage.getItem(key)).password)
            if(this.password===pass)
            {
              alert("Login Successful")
              localStorage.setItem("loginUser",key)
              this.$router.push('/home')
            }
            else
            alert("Password incorrect")
          }
        } 
        if(check){
            alert("Your email dosn't exist")
          }
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
.login{
    /* The image used */
  background-image: url("https://40obml2t8u691fd442y9pg71-wpengine.netdna-ssl.com/wp-content/uploads/login-page-bg.jpg");
  padding: 0px;
  margin: 0px;
  /* Full height */
  width: 100%;
  height: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

}
</style>