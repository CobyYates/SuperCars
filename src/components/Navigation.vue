<template>
  <v-container>
    <v-bottom-navigation :value="activeBtn" absolute grow background-color="teal" color="white">
    <v-btn>
      <span>Cars</span>
      <v-icon>mdi-history</v-icon>
    </v-btn>
    <v-btn>
      <span>Compare</span>
      <v-icon>mdi-heart</v-icon>
    </v-btn>
  </v-bottom-navigation>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    
  }),
};
</script>

<style scoped>
  .v-btn:not(.v-btn--round).v-size--default {
    height: 100%;
    }
</style>