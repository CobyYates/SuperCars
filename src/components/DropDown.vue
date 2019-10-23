<template>
  <v-container>
    <v-row>
      <v-col class="sm-4">
        <p>Sort by:</p>
        <v-overflow-btn :items="filter" label="Specs" ></v-overflow-btn>
        </v-col>
      <!-- <v-col>
        <p>Filter by:</p>
        <v-overflow-btn :items="filter" label="Specs" ></v-overflow-btn>
        </v-col>
      <v-col>
        <p>Filter by:</p>
        <v-overflow-btn :items="filter" label="Specs" ></v-overflow-btn>
        </v-col> -->
    </v-row>
    
  </v-container>
</template>

<script>
import { cars } from './assets/cars';

export default {
  data: () => ({
    filter: ['Price', 'Engine', 'HP', 'Torque', '0-60', 'Top Speed', 'Weight']
  }),
  methods: {
    priceSort: function() {
      return this.cars.sort(function(a, b) {
        var x = a.price
        var y = b.price
        if (x < y) {return -1}
        if (x > y) {return 1}
        return 0
      })
    }
};
</script>
