<template>
  <v-container>
    <v-row>
      <v-col class="d-flex justify-center">
        <h1>Here is your completed garage build</h1>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col class="garage">
        <v-card class="mx-auto mb-5" max-width="500" dark outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">Garage</div>
              <v-list-item-title class="headline mb-1"
                >Size: {{ this.$store.state.selectedSize[0].size }}</v-list-item-title>
              <v-list-item-subtitle
                >You have a limited size of {{ this.$store.state.selectedSize[0].size }} parking
                spots in your garage to store cars.</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-avatar tile size="80" >
            <v-img src="../assets/Garage.png"></v-img>

            </v-list-item-avatar>
          </v-list-item>
        </v-card>
        <!-- <hr> -->
      </v-col>
    </v-row>
    <v-row>
        <app-complete-car :cars="selectedCars"></app-complete-car>
    </v-row>
    <v-row>
      <v-col>
          <app-complete-person></app-complete-person>
          </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CompleteCar from './CompleteCar'
import Completeperson from './CompletePerson'

export default {
  props: ["car"],
    components: {
        'app-complete-person': Completeperson,
        'app-complete-car': CompleteCar
    },
    computed: {
     selectedCars(){
       return this.$store.state.selectedCars
     }
    },
};
</script>

<style></style>
