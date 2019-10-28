<template>
  <v-app>
    <app-top-nav></app-top-nav>
    <v-content>
      <v-row>

        <v-col>
          <v-row>
            <app-grid :cars="cars"></app-grid>
          </v-row>
        </v-col>

      </v-row>
      <app-footer></app-footer>
      <app-form></app-form>
    </v-content>
  </v-app>
</template>

<script>
import Card from './components/Card';
import { cars } from './assets/cars';
import Grid from './components/Grid';
import TopNav from './components/TopNav';
import Footer from './components/Footer';
import Form from './components/Form'

export default {
  name: 'App',
  components: {
    'app-card': Card,
    'app-grid': Grid,
    'app-top-nav': TopNav,
    'app-footer': Footer,
    'app-form': Form
  },
  data: () => ({
    cars
  }),
};
</script>

<style scoped>
</style>