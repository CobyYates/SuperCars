<template>
  <div>
    <v-row class="back">
      <v-col sm="10">
          <!-- <app-garage></app-garage> -->
        <!-- <app-cars></app-cars> -->
        <app-people></app-people>
      </v-col>
      <hr>
      <v-col>
        <v-row>
          <v-col class="d-flex flex-column">
            <v-row>
              <v-col class="d-flex justify-center">
                Your build will be saved here
              </v-col>
            </v-row>
            <v-row>
              <v-col class="d-flex justify-center">
                <v-btn color="teal accent-4" class="mb-12">NEXT STEP</v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios'
import Garage from "./Garage";
import Cars from "./Cars";
import People from "./People";

export default {
  data: () => ({}),
  components: {
    "app-garage": Garage,
    "app-cars": Cars,
    "app-people": People
  },
};
</script>

<style scoped>
</style>