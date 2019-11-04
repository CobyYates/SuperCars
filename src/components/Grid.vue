<template>
  <v-app>
    <v-row>
      <v-col class="pb-12 pt-0">
        <v-parallax
          height="400"
          src="http://ddaudio.com/wp-content/uploads/2016/01/carbonfiber-header-black-1.jpg">
          <v-row align="center">
            <v-col align="center">
              <h2 class="pb-4 display-4">HYPERCAR:</h2>
          <p>"top-tier supercar that bests all or most of the elements of standard supercars including, </p>
          <p>not limited to, acceleration, price, rarity, handling, top speed, sound and appearance - 
            <a id="link" href="https://www.zeroto60times.com/2013/01/supercars-vs-hypercars-definition/" target="_blank">Chris Edwards</a></p>
            </v-col>
          </v-row>          
        </v-parallax>
      </v-col>
    </v-row>
    <v-container :cars="cars">
      <v-row>
        <v-col sm="3" v-for="car in cars" :key="car.price">
          <app-card :car="car"></app-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import appCard from "./Card.vue";
import { cars } from "../assets/cars";

export default {
  data: () => ({
    cars
  }),
  components: {
    appCard
  }
};
</script>

<style scoped>
  #link {
    text-decoration: none;
    color: white;
  }
</style>