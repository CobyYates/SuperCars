<template>
  <v-app class="pt-0">
    <app-top-nav></app-top-nav>
    <v-content>
      <v-row>

        <v-col>
          <v-row>
            <app-drop></app-drop>
            <app-grid :cars="cars"></app-grid>
          </v-row>
        </v-col>

      </v-row>
    </v-content>
  </v-app>
</template>

<script>
import Card from './components/Card';
import { cars } from './assets/cars';
import Grid from './components/Grid';
import DropDown from './components/DropDown';
import TopNav from './components/TopNav';

export default {
  name: 'App',
  components: {
    'app-card': Card,
    'app-grid': Grid,
    'app-drop': DropDown,
    'app-top-nav': TopNav
  },
  data: () => {
    return {
      cars
    }
  },
};
</script>

<style scoped>
</style>