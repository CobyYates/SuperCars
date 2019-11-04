<template>
  <v-footer dark padless absolute>
    <v-card class="flex" flat tile>
      <v-card-title class="teal">

        <div class="flex-grow-1"></div>

        <v-btn text class="display-1"><i class="fab fa-facebook-square 5x"></i></v-btn>
        <v-btn text class="display-1"><i class="fab fa-instagram"></i></v-btn>
        <v-btn text class="display-1"><i class="fab fa-medium"></i></v-btn>
        <v-btn text class="display-1"><i class="fab fa-github"></i></v-btn>
        <v-btn text class="display-1"><i class="fab fa-twitter-square"></i></v-btn>
        <v-btn text class="display-1"></v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>CoberApps</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
</script>

<style scoped>
</style>