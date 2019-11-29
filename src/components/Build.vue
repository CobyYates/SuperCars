<template>
  <div>
    <v-row class="back test builder">
      <v-col sm="10" class="pl-6">
        <v-btn
          class="sliderDiv"
          color="teal teal lighten-2"
          small
          @click="show = !show"
          ><</v-btn
        >
        <router-view v-model="activePlan"></router-view>
        <v-row>
            <v-col class="bottom"> 
            </v-col>
          </v-row>
      </v-col>
      <!-- <transition name="slide" mode="in"> -->
        <v-col v-if="show" class="sidebar teal lighten-2">
          <v-row>
            <v-col class="d-flex flex-column">
              <v-row>
                <v-col class="d-flex flex-column align-center">
                  <p>Your build will be saved here</p>
                  <v-img
                    src="../assets/Garage.png"
                    width="150"
                    class="mx-auto mt-3"
                  ></v-img>
                  <h2>Garage Size: {{ this.$store.state.selectedSize[0].size }}</h2>
                  <h2 class="car">
                    <!-- Cars: {{ this.$store.state.selectedCars[0] }} -->
                    <!-- {{ this.$store.state.selectedCars[0] }} -->
                  </h2>
                  <h2>
                    Helper: {{ this.$store.state.selectedHelper[0].name }}
                    {{ this.$store.state.selectedHelper[0].surname }}
                  </h2>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      <!-- </transition> -->
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
    show: "show"
  }),
  components: {
    "app-garage": Garage,
    "app-cars": Cars,
    "app-people": People
  },
  methods: {
    update: function(updatedGarage) {
      this.garage = updatedGarage;
    }
  }
};
</script>

<style scoped>
.sliderDiv {
  /* position: relative;
  left: -200px; */
}

.slide-enter-active {
  animation: slide-in 1000ms ease-in forwards;
}

.slide-leave-active {
  animation: slide-in 1000ms reverse;
}

@keyframes slide-in {
  0% {
    transform: translateX(100%);
  }
  50% {
    transform: translateX(100%);
  }
}
</style>
