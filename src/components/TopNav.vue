<template>
  <div>
    <v-toolbar dark>
      <a href="#">
        <img class="logo" src="https://i.imgur.com/a8JzMHo.png" alt="">
      </a>
      <v-toolbar-title>The Garage</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-toolbar-items>
            <v-divider class="teal darken-3" vertical></v-divider>
        <v-btn text color="teal accent-3">Super Cars</v-btn>
            <v-divider class="teal darken-3" vertical></v-divider>
        <v-btn text color="teal accent-3">Electric Cars</v-btn>
            <v-divider class="teal darken-3" vertical></v-divider>
        <v-btn text color="teal accent-3">All</v-btn>
            <v-divider class="teal darken-3" vertical></v-divider>
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