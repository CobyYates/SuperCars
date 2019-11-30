<template>
  <v-content>
    <v-row>
      <v-col class="d-flex justify-center my-6">
        <h2>Select Your Garage Size</h2>
        <!-- nested routes for page to page (video 244) -->
      </v-col>
    </v-row>
    <v-row>
      <app-garage planName="2" v-model="activePlan"></app-garage>
      <app-garage planName="3" v-model="activePlan"></app-garage>
      <app-garage planName="4" v-model="activePlan"></app-garage>
      <app-garage planName="5" v-model="activePlan"></app-garage>
      <app-garage planName="6" v-model="activePlan"></app-garage>
      <app-garage planName="7" v-model="activePlan"></app-garage>
      <app-garage planName="8" v-model="activePlan"></app-garage>
      <app-garage planName="9" v-model="activePlan"></app-garage>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center">
        <!-- Add function to state for size -->
        <v-btn to="/build/cars" color="teal accent-4">NEXT STEP > CARS</v-btn>
      </v-col>
    </v-row>
  </v-content>
</template>

<script>
import GarageComponent from "./GarageComponent";

export default {
  data: () => ({
    activePlan: '2'
  }),
  methods: {
   
  },
  computed: {},
  components: {
    "app-garage": GarageComponent
  }
};
</script>

<style scoped>
</style>