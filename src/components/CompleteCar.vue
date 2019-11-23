<template>
  <v-container>
    <v-col v-for="car in cars">
      <app-car :car="car"></app-car>
    </v-col>
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