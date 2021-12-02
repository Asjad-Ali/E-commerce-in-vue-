<template>
<div class="signup">
  <v-container >
    <header-2 />
    <v-main >
      <v-row class="align-center justify-center">
      <v-col lg="5" md="6" sm="8">
        <v-card rounded="lg" elevation="5" class="pa-5 my-3">
          <v-card-title class="justify-center">UPDATE DATA</v-card-title>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="fname"
                  :rules="nameRules"
                  label="First name"
                  hint="e.g Asjad"
                  required
                  outlined
                  dense
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  v-model="lname"
                  :rules="nameRules"
                  hint="e.g Ali"
                  label="Last name"
                  required
                  outlined
                  dense
                ></v-text-field>
              </v-col>
            </v-row>

            <v-text-field
              v-model="username"
              label="Username"
              hint="e.g Asjadali, Asjad264"
              required
              outlined
              dense
            ></v-text-field>

            <v-text-field
              v-model="email"
              readonly
              label="E-mail"
              hint="e.g asjadaliwatto@gmail.com"
              required
              outlined
              dense
            ></v-text-field>

              <v-text-field
                v-model="phoneNumber"
                label="Phone Number"
                hint="e.g 3087262908, 03027262908"
                required
                outlined
                dense
              ></v-text-field>

              <v-text-field
                v-model="password"
                label="Password"
                hint="e.g Asjad@123"
                required
                outlined
                dense
              ></v-text-field>

              <v-text-field
                v-model="cpassword"
                label="Confirm Password"
                hint="e.g Asjad@123"
                required
                outlined
                dense
              ></v-text-field>

            <v-row class="justify-center my-4">
              <v-btn
                :disabled="!valid"
                color="primary"
                width="25%"
                
                @click="submit"
              >
                UPDATE
              </v-btn>
            </v-row>
            <v-row justify="center">
              <p>If you want to show the Profile data <router-link to="/profile">Click Here</router-link></p>
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
import Header2 from './header2.vue';
export default {
  name: "signup",
  components: { 
    Header2,
    },
    computed: {
    passwordMatch() {
      return () => this.password === this.cpassword || "Password and Confirm password doesn't match";
    },
  },
  data(){
    return{
    valid: true,
    fname: "",
    lname: "",
    username:"",
    email: "",
    phoneNumber:"",
    password:"",
    cpassword:"",

    
    }},

  mounted() {
    let getloginuser = localStorage.getItem("loginUser");
    let loginObject = JSON.parse(localStorage.getItem(getloginuser));
    this.userObject = loginObject;
    console.log("User object");
    console.log(loginObject);
    this.fname = loginObject.name.firstname,
    this.lname = loginObject.name.lastname,
    this.username = loginObject.username,
    this.email = loginObject.email,
    this.phoneNumber = loginObject.phone,
    this.password = loginObject.password,
    this.cpassword = loginObject.password
  },

  methods: {
    // ========> For Signup <==================
    submit() {
      if (this.$refs.form.validate()) {
      let users = {
        email:this.email,
        name:{
          firstname:this.fname,
          lastname:this.lname
        },
        username:this.username,
        phone:this.phoneNumber,
        password:this.password
      }
          {
            localStorage.setItem("loginUser",users.email)
            localStorage.setItem(users.email , JSON.stringify(users));
            alert("Profile update Successfully Click")
            this.$router.push('home') 
          }
        }
    }
  }
}
</script>

<style>
.signup{
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