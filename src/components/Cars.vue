<template>
  <v-content>
    <v-row>
      <v-col class="d-flex justify-center my-6">
        <h2>Select which cars to add to your garage</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="3" v-for="car in cars">
        <app-card :car="car"></app-card>
        <div class="flex-grow-1">
          <!-- <v-btn class="mt-4" small color="teal accent-4" @click="selectVehicle">Add to Garage</v-btn> -->
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center mb-12 pb-12">
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
  // selectVehicle() {
  //   this.$store.state.selectedCars.push("test");
  //   console.log(this.$store.state.selectedCars);
  // }
};
</script>

<style scoped>
h2 {
  color: #555;
}
</style>