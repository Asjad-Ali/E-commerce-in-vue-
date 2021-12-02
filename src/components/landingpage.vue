<template>
  <v-container class="d-flex justify-center align-center pt-15">
    <header-1 />
    <v-row>
      <v-col cols="12" lg="5" md="6" sm="12" xs="12" class="d-flex flex-column align-center ">
        <h2 class="intro-heading pt-10">Welcome to online Shopping<b>Mall</b></h2>
        <p class="bottmPadP">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          eius, iusto animi natus blanditiis totam minus commodi ex vero
          voluptatem nesciunt cupiditate! Hic expedita nostrum odit officia?
          Pariatur, quas blanditiis? Officia laborum asperiores ab quo, optio
          fugit perferendis necessitatibus ullam libero quod corrupti. Numquam,
          rem pariatur quibusdam consectetur beatae minima?
        </p>
        <v-row>
            <v-col>
            <v-btn router to="/signup" color="success" class="white-text mr-2" rounded
          >GET STARTED</v-btn
        >
            </v-col>
            <v-col>
                <v-btn color="primary" class="white-text" rounded>
          <v-icon>mdi-play-circle</v-icon> WATCH VIDEOS
        </v-btn>
            </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" lg="7" md="6" sm="12" xs="12">
        <img contain width="100%" src="../assets/landingpage-1.png" alt="" />
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import Header1 from "./Header1.vue";
export default {
  components: { Header1 },
  name: "landingpage",
};
</script>

<style>
.intro-heading {
  font-weight: bold;
  font-family: sans-serif;
  font-size: 50px;
  color: #444;
  line-height: 55px;
  padding-bottom: 20px;
}
.bottmPadP {
  color: rgba(56, 56, 56, 0.6);
  margin-bottom: 30px !important;
}
</style>