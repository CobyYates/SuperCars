<template>
  <div>
    <v-container v-if="this.$store.state.user.length === 1">
      <v-row>
        <v-col class="d-flex justify-center text-center">
          <h1>
            Here is your completed garage build                
            {{ this.$store.state.user[0].first }}
            {{ carValue | currency }}
          </h1>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-center flex-row" width="100%">
        <v-col>
          <v-container>
            <app-complete-garage></app-complete-garage>
            <v-row>
              <v-col class="d-flex justify-center justify-space-around">
                <v-btn color="teal accent-4" @click="addSpace()">+ 1</v-btn>
                <v-btn color="teal accent-4" @click="decSpace()">- 1</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col>
          <v-row>
            <app-complete-car
              class="d-flex flex-column"
              :cars="selectedCars"
            ></app-complete-car>
            <v-row>
              <v-col class="d-flex justify-center">
                <!-- <v-btn @click="test()">test</v-btn> -->
                <v-btn to="/build/cars" color="teal accent-4">Add cars</v-btn>
              </v-col>
            </v-row>
          </v-row>
        </v-col>
        <v-col>
          <v-container>
            <app-complete-person></app-complete-person>
            <v-row>
              <v-col class="d-flex justify-center">
                <v-btn to="/build/people" color="teal accent-4">Change</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>

      <div class="text-center ma-2">
        <v-snackbar v-model="snackbar">
          {{ text }}
          <v-btn color="red" text @click="snackbar = false">
            Close
          </v-btn>
        </v-snackbar>
      </div>
    </v-container>
    <v-container class="pt-12" v-else-if="this.$store.state.user.length === 0">
      <app-signin></app-signin>
    </v-container>
  </div>
</template>

<script>
import CompleteCar from "./CompleteCar";
import Completeperson from "./CompletePerson";
import CompleteGarage from "./CompleteGarage";
import SignIn from "./SignIn";

export default {
  props: ["car"],
  data: () => ({
    show: true,
    snackbar: false,
    text: ""
  }),
  components: {
    "app-complete-person": Completeperson,
    "app-complete-car": CompleteCar,
    "app-complete-garage": CompleteGarage,
    "app-signin": SignIn
  },
  computed: {
    selectedCars() {
      return this.$store.state.selectedCars;
    },
    carValue() {
      return this.$store.getters.carValue
    }
  },
  methods: {
    lengths() {
      // console.log(this.$store.state.user.length);
    },
    addSpace() {
      this.$store.state.selectedSize[0].size++;
    },
    decSpace() {
      if (
        this.$store.state.selectedSize[0].size >
        this.$store.state.selectedCars.length
      ) {
        this.$store.state.selectedSize[0].size--;
      } else if (this.$store.state.selectedSize[0].size === 0) {
        this.snackbar = true;
        this.text = "Cannot have a negative number";
      } else if (
        this.$store.state.selectedSize[0].size <=
        this.$store.state.selectedCars.length
      ) {
        this.snackbar = true;
        this.text =
          "Your garage size must not be smaller than the number of cars selected";
      }
    }
  }
};
</script>

<style></style>
