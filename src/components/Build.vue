<template>
  <div>
    <v-row class="back">
      <v-col sm="10">
        <router-view v-model="activePlan">
        </router-view>        
      </v-col>
      <hr class="divider">
      <v-col>
        <v-row>
          <v-col class="d-flex flex-column">
            <v-row>
              <v-col class="d-flex justify-center">
                <p>Your build will be saved here</p>
                <h2 >{{ activePlan }}</h2>
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
    garage: '',
    picked: "1",
    activePlan: "1"
  }),
  components: {
    "app-garage": Garage,
    "app-cars": Cars,
    "app-people": People,
  },
  methods: {
    update: function(updatedGarage){
    this.$store.getters.updatedGarage = updatedGarage
    // this.garage = updatedGarage
    }
  },
  computed: {
    activePlan() {
      return this.store.state.activePlan
    }
  }
};
</script>

<style scoped>
  .divider {
    height: 90vh;
  }
</style>