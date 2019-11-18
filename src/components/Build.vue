<template>
  <div>
    <v-row class="back test builder">
      <v-col sm="10" class="pl-6">
        <v-btn @click="show=!show">test</v-btn>
        <router-view v-model="activePlan"></router-view>
      </v-col>
      <v-col class="sidebar teal lighten-2">
        <v-row>
          <v-col class="d-flex flex-column">
            <v-row>
              <transition name="slide" mode="in">
              <v-col v-if="show" class="d-flex flex-column align-center">                
                  <p>Your build will be saved here</p>
                  <v-img
                    src="../assets/Garage.png"
                    width="150"
                    class="mx-auto mt-3"
                  ></v-img>
                  <h2>Garage Size: {{ this.$store.state.selectedSize[0] }}</h2>
                  <h2 class="car">
                    Cars: {{ this.$store.state.selectedCars[0].make }}
                    {{ this.$store.state.selectedCars[0].model }}
                  </h2>
                  <h2>
                    Helper: {{ this.$store.state.selectedHelper[0].name }}
                    {{ this.$store.state.selectedHelper[0].surname }}
                  </h2>
              </v-col>
              </transition>
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
.builder {
  height: calc(100vh - 96px);
}

.slide-enter-active {
  animation: slide-in 800ms ease-in forwards;
}

.slide-leave-active {
  animation: slide-out 800ms reverse;
}

@keyframes slide-in {
  from {
    transform: translateX(100px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 0;
  }
}
</style>
