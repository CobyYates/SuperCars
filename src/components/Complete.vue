<template>
  <v-container>
    <v-row>
      <v-col class="d-flex justify-center text-center">
        <h1>Here is your completed garage build</h1>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center flex-row" width="100%">
      <v-col>
        <v-container>
          <app-complete-garage></app-complete-garage>
        </v-container>        
      </v-col>
      <v-col>
        <v-row>
          <app-complete-car  class="d-flex flex-column" :cars="selectedCars"></app-complete-car>
        </v-row>
      </v-col>
      <v-col>
        <v-container>
          <app-complete-person></app-complete-person>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CompleteCar from "./CompleteCar";
import Completeperson from "./CompletePerson";
import CompleteGarage from "./CompleteGarage";

export default {
  props: ["car"],
  components: {
    "app-complete-person": Completeperson,
    "app-complete-car": CompleteCar,
    "app-complete-garage": CompleteGarage
  },
  computed: {
    selectedCars() {
      return this.$store.state.selectedCars;
    }
  }
};
</script>

<style></style>