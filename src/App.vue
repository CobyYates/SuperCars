<template>
  <v-app>
    <app-top-nav></app-top-nav>
    <v-content>
      <v-row>
        <v-col class="pb-0 pt-0">
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-content>
    <app-footer/>
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
    items: null,
    garageArr: []
  }),
};
</script>

<style scoped>

</style>

/*
TO DO:
- Buttons on complete to route to pages or add more to each value
- Array helper methods (filter, map, reduce)
- Scroll to top of page when changing from garage -> cars -> person
- Add form validation with login (Add's their name to the top)
- Add redirect after they submit their contact details
- Add total cost of your cars in the garage
*/