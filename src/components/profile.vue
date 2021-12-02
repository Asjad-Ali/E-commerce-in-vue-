<template>
  <div class="signup">
    <v-container >
      <header-2 />
      <v-main >
        <v-row class="d-flex align-center justify-center">
        <v-col lg="5" md="6" sm="7" >
          <v-card rounded="lg" elevation="5" class="px-8 py-4 ">
            <v-card-title class="justify-center">PROFILE DATA</v-card-title>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-row class="d-flex flex-column">

                 <v-text-field v-model="name" readonly label="Name"></v-text-field>


                  <v-text-field v-model="email" readonly label="Email"></v-text-field>

 
                    <v-text-field
                      v-model="username"
                      label="Username"
                      readonly
                    ></v-text-field>



                    <v-text-field
                      v-model="phoneNumber"
                      label="Phone Number"
                      readonly
                    ></v-text-field>



                    <v-text-field
                      v-model="password"
                      label="Password"
                      readonly
                    ></v-text-field>

              </v-row>

              <v-row justify="center">
                <p>
                  If you want to update data
                  <router-link to="/update">Click Here</router-link>
                </p>
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
import Header2 from "./header2.vue";
export default {
  name: "signup",
  components: {
    Header2,
  },
  data() {
    return {
      valid: true,
      userObject: "",
      name: "",
      email: "",
      username: "",
      password: "",
      phoneNumber: "",
    };
  },
  mounted() {
    let getloginuser = localStorage.getItem("loginUser");
    let loginObject = JSON.parse(localStorage.getItem(getloginuser));
    this.userObject = loginObject;
    console.log("User object");
    console.log(loginObject);
    (this.name = loginObject.name.firstname + " " + loginObject.name.lastname),
      (this.email = loginObject.email),
      (this.username = loginObject.username),
      (this.password = loginObject.password),
      (this.phoneNumber = loginObject.phone);
  },
};
</script>

<style>
.signup {
  /* The image used */
  background-image: url("https://40obml2t8u691fd442y9pg71-wpengine.netdna-ssl.com/wp-content/uploads/login-page-bg.jpg");
  padding: 0px;
  margin: 0px;
  /* Full height */
  width: 100%;
  height: 100%;
  background-position: center;
    background-attachment: fixed;

  background-repeat: no-repeat;
  background-size: cover;
}
</style>