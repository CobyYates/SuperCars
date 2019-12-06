<template>
<v-container>
  <v-row>
      <v-col class="text-center">
          <h2>Information Submitted</h2>
      </v-col>
  </v-row>
  <v-row class="justify-center">
    <v-col class="text-justify message py-12" xl="6">
      <p>{{ this.$store.state.contact[0].name }}</p>
      <p>{{ this.$store.state.contact[0].email }}</p>
      <p>{{ this.$store.state.contact[0].message }}</p>
    </v-col>
  </v-row>
  <v-row>
    <v-col class="text-center">
        <h2 class="pt-12">Thank you for your submission</h2>
        <h2></h2>
    </v-col>
  </v-row>
</v-container>
  
</template>

<script>
export default {

}
</script>

<style>
</style>