<template>
  <v-content align="center">
    <v-container>
      <!-- :cars="cars" -->
      <v-row>
        <v-col class="mt-12">
          <h2>Add cars to your garage</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-col class="d-flex justify-center">
            <h3>Next Step</h3>
            <router-link to="/people">
              <v-btn color="teal accent-4" class="mb-12">HIRE DRIVER</v-btn>
            </router-link>
          </v-col>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="3" v-for="car in cars">
          <app-card :car="car"></app-card>
          <div class="flex-grow-1">
            <v-btn class="mt-4" small color="teal accent-4">Add to Garage</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import appCard from "./Card.vue";
import { cars } from "../assets/cars";

export default {
  data: () => ({
    cars
  }),
  components: {
    appCard
  }
};
</script>

<style scoped>
h2 {
  color: #555;
}
</style>