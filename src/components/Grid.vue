<template>
  <v-container>
    <v-row>
      <v-col sm="3" v-for="car in cars" :key="car.price">
        <app-card :car="car"></app-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import appCard from './Card.vue';

export default {
  props: ["cars"],
  data: () => ({
  }),
  components: {
    appCard
  }
};
</script>
