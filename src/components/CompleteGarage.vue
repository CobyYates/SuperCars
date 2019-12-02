<template>
  <div class="d-flex justify-center flex-column align-center">
    <v-avatar tile width="70%" height="70%">
      <img src="../assets/Garage.png" />
    </v-avatar>
    <v-list-item-content class="text-center">
      <v-list-item-title class="display-1 mb-1">
        Garage Size
      </v-list-item-title>
      <v-list-item-subtitle>
        <v-avatar color="teal accent-6" size="80" class="my-5">
          <span class="white--text display-1">{{
            this.$store.state.selectedSize[0].size
          }}</span>
        </v-avatar>
        <p class="subtitle-1 text-wrap">
          You have a limited size of parking spots in your garage to store cars.
        </p>
      </v-list-item-subtitle>
    </v-list-item-content>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
