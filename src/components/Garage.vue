<template>
  <v-container :garage="garages" class="my-12">
    <v-content align="center">
      <h2>Select Your Garage Size</h2>
      <!-- nested routes for page to page (video 244) -->
      <v-row>
        <v-col>
          <v-col class="d-flex justify-center">
              <h3>Next Step</h3>
            <router-link tag="v-btn" to>
              <v-btn color="teal accent-4" class="mb-12">CHOOSE CARS</v-btn>
            </router-link>
          </v-col>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="3" v-for="garage in garages" :key="garage">
          <v-card class="mx-auto mb-12" max-width="300" :key="garage">
            <v-row>
              <v-col align="center">
                <v-img src="../assets/Garage.png" class="my-3" max-width="70%"></v-img>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="d-flex justify-center">
                <v-card-title>{{ garage }}</v-card-title>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="d-flex justify-center">
                <v-radio color="teal accent-4" value="radio"></v-radio>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-content>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    garages: ["1 Car", "2 Car", "3 Car", "4 Car", "5 Car", "Parking Garage"]
  })
};
</script>

<style scoped>
h2 {
  color: #555;
}
</style>