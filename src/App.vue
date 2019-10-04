<template>
  <v-app>
    <v-content>
      <v-row>
        <v-col>
          <app-grid :cars="cars"></app-grid>
        </v-col>
      </v-row>
    </v-content>
    <app-nav></app-nav>
  </v-app>
</template>

<script>
import Navigation from './components/Navigation';
import Card from './components/Card';
import { cars } from './assets/cars';
import Grid from './components/Grid';

console.log(cars)

export default {
  name: 'App',
  components: {
    'app-nav': Navigation,
    'app-card': Card,
    'app-grid': Grid
  },
  data: () => {
    return {
      cars
    }
  },
};
</script>
