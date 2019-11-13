<template>
  <div>
    <v-row class="back test mb-12 pb-12">
      <v-col sm="10" class="pl-6">
        <router-view v-model="activePlan"></router-view>
      </v-col>
      <hr class="divider" />
      <v-col class="sidebar teal lighten-2">
        <v-row>
          <v-col class="d-flex flex-column">
            <v-row>
              <v-col class="d-flex flex-column align-center">
                <p>Your build will be saved here</p>
                <v-img src="../assets/Garage.png" width="150" class="mx-auto mt-3"></v-img>
                <h2>Garage Size: {{ this.$store.state.selectedSize[0] }}</h2>
                <h2 class="car">Cars: {{ this.$store.state.selectedCars[0] }}</h2>
                <h2>Helper: {{ this.$store.state.selectedHelper[0] }}</h2>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
import Garage from "./Garage";
import Cars from "./Cars";
import People from "./People";
// import func from '../../vue-temp/vue-editor-bridge';

export default {
  data: () => ({
    activePlan: "1",
    snackbar: false,
  }),
  components: {
    "app-garage": Garage,
    "app-cars": Cars,
    "app-people": People
  },
  methods: {
    update: function(updatedGarage) {
      this.garage = updatedGarage;
    },
  }
};
</script>

<style scoped>
.divider {
  height: 100vh;
}

/* .car {
    display: flex;
    flex-wrap: wrap;
  } */
</style>