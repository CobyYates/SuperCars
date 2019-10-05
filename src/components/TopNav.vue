<template>
  <div>
    <v-toolbar>
      <a href="#">
        <img class="logo" src="https://i.imgur.com/a8JzMHo.png" alt="">
      </a>
      <v-toolbar-title>Car Specs</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-toolbar-items>
        <v-btn text>Super Cars</v-btn>
        <v-btn text>Electric Cars</v-btn>
        <v-btn text>All</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    
  }),
};
</script>

<style scoped>
  .logo {
    height: 50px;
    padding-right: 20px;
  }
</style>