<template>
<v-container class="py-3" height="300px">
      <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</v-container>
</template>

<script>
export default {
  name: "carousel",
  data() {
    return {
        items: [
            {
              src: 'https://pyxis.nymag.com/v1/imgs/c7b/d78/d67ae6835178fb539b83293d63820007f5-16-fine-jewelry-market-opener.2x.rsocial.w600.jpg',
            },
          {
            src: 'https://media.istockphoto.com/photos/mens-clothes-picture-id618328744?s=612x612',
          },
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpog0O63TQSLMsVfFUeXN56b3VRPS6fWWqN73XQcalyc9hb5D7P4lXEX0CmG-5of2bffA&usqp=CAU',
          },
          {
            src: 'https://i.pinimg.com/originals/2c/c4/98/2cc498ab238b083ec04c41e09816e500.jpg',
          },
        ],
    };
  },

}
</script>

<style>
</style>