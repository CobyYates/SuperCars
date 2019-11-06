<template>
  <v-content align="center">
    <v-container :cars="cars">
      <v-row>
        <v-col class="mt-12">
          <h2>Add cars to your garage</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="3" v-for="car in cars" :key="car.price">
          <app-card :car="car"></app-card>
          <div class="flex-grow-1">
            <v-btn class="mt-4" small color="error">Add to Garage</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
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
</style>