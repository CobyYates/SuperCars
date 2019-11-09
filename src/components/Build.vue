<template>
  <div>
    <v-row class="back">
      <v-col sm="10">
        <!-- <app-garage></app-garage> -->
        <router-view>
        <!-- <app-cars></app-cars>
        <app-people></app-people> -->
        </router-view>        
      </v-col>
      <hr>
      <v-col>
        <v-row>
          <v-col class="d-flex flex-column">
            <v-row>
              <v-col class="d-flex justify-center">
                <p>Your build will be saved here</p>
                <p :garage="garage"> {{ garage }}</p>
                <!-- <p :build="car">{{ car }}</p> -->
                <!-- <p :build="car">{{ driver }}</p> -->
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
// import func from '../../vue-temp/vue-editor-bridge';

export default {
  data: () => ({
    garage: ''
  }),
  components: {
    "app-garage": Garage,
    "app-cars": Cars,
    "app-people": People
  },
  methods: {
    update: function(updatedGarage){
    this.garage = updatedGarage
    }
  }
};
</script>

<style scoped>
</style>