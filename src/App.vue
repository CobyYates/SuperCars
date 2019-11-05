<template>
  <v-app>
    <app-top-nav></app-top-nav>
    <v-content>
      <v-row>
        <v-col class="pb-0 pt-0">
          <router-view></router-view>
          <!-- <app-grid :cars="cars"></app-grid> -->
        </v-col>
      </v-row>
          <app-footer/>
    </v-content>
  </v-app>
</template>

<script>
import Card from './components/Card';
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
    'app-form': Form,
  },
  data: () => ({
  }),
};
</script>

<style scoped>
</style>