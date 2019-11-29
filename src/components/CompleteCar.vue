<template>
  <v-container>
    <v-row>
      <div class="px-4 d-flex justify-center" v-for="car in cars" :key="car.model">
      <app-car :car="car"></app-car>
    </div>
    </v-row>
  </v-container>
</template>

<script>
import Car from './Car'

export default {
props: ["cars"],
components: {
  'app-car': Car
}
}
</script>

<style>

</style>