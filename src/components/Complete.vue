<template>
  <v-container>
    <v-row>
      <v-col class="d-flex justify-center">
        <h1>Here is your completed garage build</h1>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center" width="100%">
      <v-col class="garage">
        <v-container class="text-center">
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-avatar tile size="500" sm="4">
              <v-img src="../assets/Garage.png"></v-img>
            </v-list-item-avatar>
              <v-list-item-title class="headline mb-1">
               Garage Size
              </v-list-item-title>
              <v-list-item-subtitle>
                You have a limited size of parking spots in your garage to store cars.
              </v-list-item-subtitle>
              <v-list-item-subtitle>                
                <v-avatar color="green accent-6" size="80">
                  <span class="white--text headline">{{ this.$store.state.selectedSize[0].size }}</span>
                </v-avatar>
              </v-list-item-subtitle>
            </v-list-item-content>
            
          </v-list-item>
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

export default {
  props: ["car"],
  components: {
    "app-complete-person": Completeperson,
    "app-complete-car": CompleteCar
  },
  computed: {
    selectedCars() {
      return this.$store.state.selectedCars;
    }
  }
};
</script>

<style></style>
