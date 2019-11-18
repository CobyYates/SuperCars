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
- Get rid of cars page
- Route button in bottom of app.vue 
- Change background colors for selected garage size 
- Style buttons on car cards
- Add ability to add multiple cars and have them display in side menu 
- Scroll to top of page when changing from garage -> cars -> person
- Change color of buttons for moving between building pages 
- 
*/