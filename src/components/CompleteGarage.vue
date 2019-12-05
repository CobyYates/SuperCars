<template>
  <div class="d-flex justify-center flex-column align-center">
    <v-avatar tile width="70%" height="70%">
      <img src="../assets/Garage.png" />
    </v-avatar>
    <v-list-item-content class="text-center">
      <v-list-item-title class="headline mb-1">
        Garage Size
      </v-list-item-title>
      <v-list-item-subtitle>
            <p class="display-1 teal--text">{{ this.$store.state.selectedSize[0].size }}</p>
        <p class="subtitle-1 text-wrap">
          You have a limited size of parking spots in your garage to store cars.
        </p>
      </v-list-item-subtitle>
    </v-list-item-content>
  </div>
</template>

<script>
export default ({
  data: () => ({
    
  }),
})
</script>

<style></style>
