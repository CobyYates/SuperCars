<template>
  <v-content>
    <v-row>
      <v-col class="d-flex justify-center my-6">
        <h2>Select Your Garage Size {{ activePlan }}</h2>
        <!-- nested routes for page to page (video 244) -->
      </v-col>
    </v-row>
      <v-row>
        <v-col sm="3" v-for="car in cars">
          <app-card :car="car"></app-card>
          <div class="flex-grow-1">
            <v-btn class="mt-4" small color="teal accent-4" @click="selectedVehicle">Add to Garage</v-btn>
          </div>
        </v-col>
      </v-row>
      <v-row>
      <v-col class="d-flex justify-center mb-12 pb-12">
        <!-- <router-link to="/cars" @click="addGarage()"><v-btn color="teal">CHOOSE CARS</v-btn></router-link> -->
        <v-btn to="/build/people" color="teal">NEXT STEP > HIRE DRIVER</v-btn>
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
  selectVehicle() {
    this.$store.state.selectedSize.push(this.cars)
  }
};
</script>

<style scoped>
h2 {
  color: #555;
}
</style>