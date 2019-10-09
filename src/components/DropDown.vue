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
export default {
  data: () => ({
    filter: ['Price', 'Engine', 'HP', 'Torque', '0-60', 'Top Speed', 'Weight']
  }),
  // methods: {
  //   filterBy() {
  //     if(filter == 'Price'){
  //       this.cars.sort((a, b) => a.price > b.price ? 1 : -1);
  //     }
  //   }
  // }
};
</script>
