<template>
  <div>
    <v-row class="back test builder">
      <v-col sm="12" class="px-6">
        <transition name="fade">
          <router-view v-model="activePlan"></router-view>
        </transition>
        <v-row>
          <v-col class="bottom"> </v-col>
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
.fade-enter-active {
  /* transition: opacity 2s; */
  transform: translateY(100%);
}
.fade-enter {
  opacity: 0;
}

.fade-leave-active {
  /* transition: opacity .5s; */
  transform: translateY(50%);
}
.fade-leave-to {
  opacity: 1;
}
</style>
