<template>
  <div class="signup">
    <v-container>
      <header-2 />
      <v-main class="pa-0">
        <v-col lg="5">
          <v-card rounded="lg" elevation="5" class="pa-8">
            <v-card-title class="justify-center">PROFILE DATA</v-card-title>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-row class="d-flex formRow">
                <v-col cols="12">
                 <v-text-field v-model="name" label="Name"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="email" label="Email"></v-text-field>
                </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="username"
                      label="Username"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-text-field
                      v-model="phoneNumber"
                      label="Phone Number"
                    ></v-text-field>
                  </v-col>

                  <v-col>
                    <v-text-field
                      v-model="password"
                      label="Password"
                    ></v-text-field>
                  </v-col>
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
    (this.name = loginObject.name.firstName + " " + loginObject.name.lastName),
      (this.email = loginObject.Email),
      (this.username = loginObject.Username),
      (this.password = loginObject.Password),
      (this.phoneNumber = loginObject.PhoneNumber);
  },
};
</script>

<style>
.signup {
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
.formRow col{
  padding: 0px;
  margin: 0px;
}
</style>