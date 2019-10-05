<template>
<v-hover v-slot:default="{ hover }">
  <v-card class="mx-auto" max-width="344" :elevation="hover ? 12 : 2">
    <v-img src= car.image></v-img>

    <v-card-title>
      <div>{{ car.year }} {{ car.make }} {{ car.model }}</div>
      <v-list-item-subtitle>${{ car.price }}</v-list-item-subtitle>
    </v-card-title>

    <v-card-actions>
      <v-btn text>Share</v-btn>

      <v-btn text color="purple">
        Explore
      </v-btn>

      <div class="flex-grow-1"></div>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-card-text>
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
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</v-hover>
</template>

<script>

export default {
  props: ["car"],
  data: () => ({
    show: false,
  }),
};
</script>
