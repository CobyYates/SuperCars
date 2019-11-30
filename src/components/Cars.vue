<template>
  <v-content>
    <v-row>
      <v-col class="d-flex justify-center my-6">
        <h2>Select which cars to add to your garage</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col xs="1" sm="6" md="4" lg="3" xl="2" v-for="car in cars">
        <app-card :car="car"></app-card>
        <div class="flex-grow-1">
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center mb-12 pb-12">
        <v-btn to="/build/people" class="mt-12 mb-0" color="teal accent-4">NEXT STEP > HIRE DRIVER</v-btn>
      </v-col>
    </v-row>
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
  },
};
</script>

<style scoped>
h2 {
  color: #555;
}
</style>