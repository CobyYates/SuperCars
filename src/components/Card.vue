<template>
  <v-hover v-slot:default="{ hover }">
    <v-card dark class="mx-auto" max-width="350" :elevation="hover ? 12 : 2">
      <v-img :src="car.image"></v-img>

      <v-card-title>
        <div class="text-no-wrap carTitle">
          {{ car.year }} {{ car.make }} {{ car.model }}
        </div>
        <v-list-item-subtitle>{{ car.price | currency }}</v-list-item-subtitle>
      </v-card-title>

      <v-card-actions>
        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
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
      <div class="d-flex justify-center pb-4">
        <v-btn class="mt-4" large small color="teal accent-4" @click="selectVehicle">Add to Garage</v-btn>
      </div>      
    </v-card>
  </v-hover>
</template>

<script>
import CardExpand from "./CardExpand";

export default {
  props: ["car"],
  data: () => ({
    show: false,
    dialog: false,
    emptyIcon: "mdi-garage-outline",
    fullIcon: "mdi-garage",
  }),
  components: {
    "app-card-expand": CardExpand
  },
  methods: {
    selectVehicle() {
      if (this.$store.state.selectedCars[0] === "test") {
        this.$store.state.selectedCars.pop();
        this.$store.state.selectedCars.push(this.car);
      } else if (this.$store.state.selectedSize[0].size > this.$store.state.selectedCars.length) {
        this.$store.state.selectedCars.push(this.car);
      } else if (this.$store.state.selectedSize[0].size <= this.$store.state.selectedCars.length) {
        alert('Too many vehicles')
      }
    }
  }
};
</script>

<style scoped>
.carTitle {
  font-size: 1.25rem;
  font-weight: bold;
}
</style>
