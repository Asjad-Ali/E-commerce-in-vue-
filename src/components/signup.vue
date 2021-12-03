<template>
<div class="Signpage">
    <header-1 />
  <v-container >
    <v-main >
      <v-row class="d-flex align-center justify-center">
      <v-col lg="5" md="6" sm="8" xs="12">
        <v-card rounded="lg" elevation="5" class="pa-5 my-3">
          <v-card-title class="justify-center">SIGNUP</v-card-title>
          <v-form ref="form" v-model="valid" lazy-validation>

                <v-text-field
                  v-model="fname"
                  append-icon = 'mdi-account'
                  :rules="nameRules"
                  label="First name"
                  hint="e.g Asjad"
                  required
                  outlined
                  dense
                ></v-text-field>

                <v-text-field
                  v-model="lname"
                  append-icon = 'mdi-account'
                  :rules="nameRules"
                  hint="e.g Ali"
                  label="Last name"
                  required
                  outlined
                  dense
                ></v-text-field>

            <v-text-field
              v-model="username"
              label="Username"
              append-icon = 'mdi-account-box'
              :rules="usernameRules"
              hint="e.g Asjadali, Asjad264"
              required
              outlined
              dense
            ></v-text-field>

            <v-text-field
              v-model="email"
              append-icon = 'mdi-email'
              :rules="emailRules"
              label="E-mail"
              hint="e.g asjadaliwatto@gmail.com"
              required
              outlined
              dense
            ></v-text-field>

              <v-text-field
                v-model="phoneNumber"
                append-icon = 'mdi-phone-plus'
                :rules="phoneNumberRules"
                label="Phone Number"
                hint="e.g 3087262908, 03027262908"
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
                hint="e.g Asjad@123"
                required
                outlined
                dense
              ></v-text-field>
              

              <v-text-field
                v-model="cpassword"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'" 
                @click:append="show1 = !show1"
                :rules="cpasswordRules"
                label="Confirm Password"
                hint="e.g Asjad@123"
                required
                outlined
                dense
              ></v-text-field>

            <v-row class="justify-center my-1">
              <v-btn
                :disabled="!valid"
                color="primary"
                width="25%"
                class="mx-10 "
                @click="signup"
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
  components: { Header1 },
  name: "signup",
    computed: {
    passwordMatch() {
      return () => this.password === this.cpassword || "Password and Confirm password doesn't match";
    },
  },
  data(){
    return{
    show1:false,
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
      // () => this.password === this.cpassword || "Password and Confirm password doesn't match"      
    ],
    }},

  methods: {
    // ========> For Signup <==================
    signup() {
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
      var check=true
      const keys = Object.keys(localStorage);
        for (let key of keys) {
          console.log(key)
          if(key===users.email)
          {
            check=false
            alert("Email already exist")
          }}
        if(check){
            localStorage.setItem("loginUser",users.email)
            localStorage.setItem(users.email , JSON.stringify(users));
            this.$router.push('login') 
          alert("Your account successfully created")
        }
        }
    },
    
  }
}
</script>

<style>
.Signpage{
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