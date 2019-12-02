<template>
  <div class="d-flex justify-center flex-column align-center">
    <v-avatar width="70%" height="70%">
      <img :src="this.$store.state.selectedHelper[0].photo">
    </v-avatar>
    <v-list-item-content class="text-center">
      <v-list-item-title class="headline mb-1">
        Hired Helper
      </v-list-item-title>
      <v-list-item-subtitle>
        <p class="display-1 teal--text">{{ this.$store.state.selectedHelper[0].name }}
        {{ this.$store.state.selectedHelper[0].surname }}</p>
        <p class="subtitle-1">From: {{ this.$store.state.selectedHelper[0].region }}</p>        
        <p class="subtitle-1">Age: {{ this.$store.state.selectedHelper[0].age }}</p>
      </v-list-item-subtitle>
    </v-list-item-content>
  </div>
</template>

<script>
export default {};
</script>

<style>
v-img {
  border-radius: 50px;
}
</style>
