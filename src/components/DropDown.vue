<template>
  <v-container>
    <p>Filter</p>

        <v-overflow-btn
          class="my-2"
          :items="filter"
          label="Specs"
        ></v-overflow-btn>
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
