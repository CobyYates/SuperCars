<template>
  <v-content>
    <v-row>
      <v-col>
        <h2>Select Your Garage Size</h2>
        <!-- nested routes for page to page (video 244) -->
        <v-row>
          <v-col>
            <v-col class="d-flex justify-center">
              <h3>Next Step</h3>
              <!-- <p>{{ active }}</p> -->
              <router-link to="/cars" @click="addGarage()">CHOOSE CARS</router-link>
            </v-col>
          </v-col>
        </v-row>
        <h2>{{ activePlan }}</h2>
      </v-col>
    </v-row>
    <v-row>
      <app-garage planName="1" v-model="activePlan"></app-garage>
      <app-garage planName="2" v-model="activePlan"></app-garage>
      <app-garage planName="3" v-model="activePlan"></app-garage>
      <app-garage planName="4" v-model="activePlan"></app-garage>
      <app-garage planName="5" v-model="activePlan"></app-garage>
      <app-garage planName="6" v-model="activePlan"></app-garage>
      <app-garage planName="7" v-model="activePlan"></app-garage>
      <app-garage planName="8" v-model="activePlan"></app-garage>
    </v-row>
  </v-content>
</template>

<script>
import GarageComponent from "./GarageComponent";

export default {
  data: () => ({
    picked: "1",
    activePlan: "1"
  }),
  methods: {},
  computed: {},
  components: {
    "app-garage": GarageComponent
  }
};
</script>

<style scoped>

</style>