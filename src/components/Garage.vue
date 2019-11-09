<template>
  <v-content>
    <v-row>
      <v-col>
        <h2>Select Your Garage Size</h2>
      </v-col>
    </v-row>
    <v-row>
      <app-garage
      planName="1"
      v-model="activePlan"
      ></app-garage>
      <app-garage
      planName="2"
      v-model="activePlan"
      ></app-garage>
      <app-garage
      planName="3"
      v-model="activePlan"
      ></app-garage>
      <app-garage
      planName="4"
      v-model="activePlan"
      ></app-garage>
      <app-garage
      planName="5"
      v-model="activePlan"
      ></app-garage>
      <app-garage
      planName="6"
      v-model="activePlan"
      ></app-garage>
      <app-garage
      planName="7"
      v-model="activePlan"
      ></app-garage>
      <app-garage
      planName="8"
      v-model="activePlan"
      ></app-garage>
    </v-row>
  </v-content>
</template>

<script>
import GarageComponent from './GarageComponent'

export default {
  data: () => ({
    picked: '1',
    activePlan: '',
  }),
  methods: {
    
  },
  computed: {},
  components: {
    'app-garage': GarageComponent
  }
};
</script>

<style scoped>
</style>