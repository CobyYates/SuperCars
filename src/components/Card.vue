<template>
<v-hover v-slot:default="{ hover }">
  <v-card dark class="mx-auto" max-width="344" :elevation="hover ? 12 : 2">
    <v-img :src="car.image"></v-img>

    <v-card-title>
      <div class="text-no-wrap carTitle">{{ car.year }} {{ car.make }} {{ car.model }}</div>
      <v-list-item-subtitle>${{ car.price }}</v-list-item-subtitle>
    </v-card-title>

    <v-card-actions>
      <!-- Code for making a carousel popup -->
      <!-- <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn text v-on="on" color="teal accent-3">
          Details
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline teal" primary-title>
          {{ car.year }} {{ car.make }} {{ car.model }}
        </v-card-title>

      <v-carousel hide-delimiters>
        <v-carousel-item v-for="(car,i) in cars" :key="i" :src="car.images.image"></v-carousel-item>
      </v-carousel>

        <v-divider></v-divider>

        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="primary" text @click="dialog = false">
            Done
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog> -->

      <!--  -->

      <div class="flex-grow-1"></div>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-card-text>
            <v-divider class="teal"></v-divider>          
          <v-row>
            <v-col>
              <h3>Power:</h3>
              <h3>Torque:</h3>
              <h3>Engine:</h3>
              <h3>0-60:</h3>
              <h3>Top Speed:</h3>
              <h3>Weight:</h3>
            </v-col>
            <v-col> 
              <h3>{{ car.power }} hp</h3>
              <h3>{{ car.torque }} foot lbs</h3>
              <h3>{{ car.engine }}</h3>
              <h3>{{ car.sixty }} seconds</h3>
              <h3>{{ car.top_speed }} mph</h3>
              <h3>{{ car.weight }} lbs</h3>
            </v-col>
          </v-row>
              <v-divider class="teal"></v-divider>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</v-hover>
</template>

<script>
import CardExpand from './CardExpand'

export default {
  props: ["car"],
  data: () => ({
    show: false,
    dialog: false
  }),
  components: {
    'app-card-expand': CardExpand
  }
};
</script>

<style scoped>
  .carTitle {
    font-size: 1.25rem;
  }
</style>