<template>
  <v-container class="d-flex justify-center">
        <div
          v-for="car in cars"
          :key="car.model"
        >
          <app-car :car="car"></app-car>
        </div>
  </v-container>
</template>

<script>
import Car from "./Car";

export default {
  props: ["cars"],
  data: () => ({
  }),
  components: {
    "app-car": Car,
  },
};
</script>

<style>

</style>
