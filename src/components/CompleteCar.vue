<template>
  <v-container>
    <v-row>
      <!-- <transition name="fade"> -->
        <div
          class="px-4 d-flex justify-center"
          v-for="car in cars"
          :key="car.model"
        >
          <app-car :car="car"></app-car>
          <!-- <v-btn text @click="show = !show">Remove</v-btn> -->
        </div>
      <!-- </transition> -->
    </v-row>
  </v-container>
</template>

<script>
import Car from "./Car";

export default {
  props: ["cars"],
  data: () => ({
    // show: true
  }),
  components: {
    "app-car": Car,
  },
};
</script>

<style>
/* .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
} */
</style>
