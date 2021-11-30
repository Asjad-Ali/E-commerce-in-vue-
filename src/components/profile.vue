<template>
<div class="signup">
  <v-container >
    <header-1 />
    <v-main class="my-3" >
      <v-row class="align-center justify-center">
        <v-col cols="6" lg="6">
            <img  src="" alt="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg">
        </v-col>
      <v-col cols="6" lg="6">
        <v-card rounded="lg" elevation="5" class="pa-5 my-3">
          <v-card-title class="justify-center">PROFILE DATA</v-card-title>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="fname"
                  :rules="nameRules"
                  label="First name"
                  hint="e.g Asjad"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  v-model="lname"
                  :rules="nameRules"
                  hint="e.g Ali"
                  label="Last name"
                  required
                ></v-text-field>
              </v-col>
            </v-row>

            <v-text-field
              v-model="username"
              label="Username"
              :rules="usernameRules"
              :counter="15"
              hint="e.g Asjadali, Asjad264"
              required
            ></v-text-field>

            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              hint="e.g asjadaliwatto@gmail.com"
              required
            ></v-text-field>

              <v-text-field
                v-model="phoneNumber"
                :rules="phoneNumberRules"
                label="Phone Number"
                hint="e.g 3087262908, 03027262908"
                required
              ></v-text-field>

              <v-text-field
                v-model="password"
                :rules="passwordRules"
                label="Password"
                hint="e.g Asjad@123"
                required
              ></v-text-field>

              <v-text-field
                v-model="cpassword"
                :rules="cpasswordRules"
                label="Confirm Password"
                hint="e.g Asjad@123"
                required
              ></v-text-field>

            <v-row class="justify-center my-4">
              <v-btn
                :disabled="!valid"
                color="primary"
                width="25%"
                class="mx-10 "
                @click="submit"
              >
                SIGNUP
              </v-btn>
            </v-row>
            <v-row justify="center">
              <p>Already have an account <router-link to="/login">Click Here</router-link></p>
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
  name: "signup",
  components: { 
    Header1,
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
    email: "",
    username:"",
    password:"",
    cpassword:"",
    phoneNumber:"",

    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v.length <= 10 ) || "Name must be less than 10 characters",
      (v) => (v.length >= 3 ) || "Name must be greater than 3 characters",
    ],
    usernameRules: [
      (v) => !!v || "Name is required",
      (v) => (v.length >= 4 ) || "Username must be greater than 4 characters",
    ],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    phoneNumberRules:[
      (v) => !!v || "Phone number is required",
      (v) => /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/.test(v) || "Phone Number must be valid",      
    ],
    passwordRules:[
      (v) => !!v || "Password is required",
      (v) => (v.length >= 8) || "Min 8 characters",
      (v) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!.%*?&])[A-Za-z\d@$!%*.?&]{8,}$/.test(v) || "Password is not valid Enter password like e.g Asjad@264",
    ],
    cpasswordRules:[
      (v) => !!v || "Confirm Password is required",
      (v) => (v.length >= 8) || "Min 8 characters",
      (v) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!.%*?&])[A-Za-z\d@$!%*.?&]{8,}$/.test(v) || "Password is not valid Enter password like e.g Asjad@264",
      () => this.password === this.cpassword || "Password and Confirm password doesn't match"      
    ],
    }},

  methods: {
    // ========> For Signup <==================
    submit() {
      if (this.$refs.form.validate()) {
      let users = {
        email:this.email,
        name:{
          firstName:this.fname,
          lastName:this.lname
        },
        username:this.username,
        phoneNumber:this.phoneNumber,
        password:this.password
      }
      const keys = Object.keys(localStorage);
        for (let key of keys) {
          if(key===users.Email)
          {
            alert("Email already exist")
          }
          else{
            alert("Signup Successfully Click ok to Login Page")
            localStorage.setItem(users.email , JSON.stringify(users));
            this.$router.push('login') 
          }
        }
    }
  }
}
}
</script>

<style>
.signup{
    /* The image used */
  background-image: url("https://img.lovepik.com//photo/40007/3495.jpg_300.jpg");
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