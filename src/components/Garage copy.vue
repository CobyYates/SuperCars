<template>
  <v-container :garage="garages" class="my-12">
    <v-content align="center">
      <h2>Select Your Garage Size</h2>
      <!-- nested routes for page to page (video 244) -->
      <v-row>
        <v-col>
          <v-col class="d-flex justify-center">
            <h3>Next Step</h3>
            <!-- <p>{{ active }}</p> -->
            <router-link to="/cars" @click="addGarage()">CHOOSE CARS

              <!-- <v-btn color="teal accent-4" class="mb-12" @click="addGarage()">CHOOSE CARS</v-btn> -->
            </router-link>
            <div class="result">Radio button selection: {{selectedLabel}}</div>
          </v-col>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="3" v-for="garage in garages">
          <v-card class="mx-auto mb-12" max-width="300">
            <v-row>
              <v-col align="center">
                <v-img src="../assets/Garage.png" class="my-3" max-width="70%"></v-img>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="d-flex justify-center">
                <v-card-title>{{ garage.text }}</v-card-title>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="d-flex justify-center">
                <v-radio-group >
                  <v-radio
                    @change="changeValue(garage.value)"
                    color="teal accent-4"
                    name="active"
                    :value="garages.value"
                    :id="garages.value"
                    v-model="size"
                  ></v-radio>
                </v-radio-group>
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
  props: ['garage'],
  data: () => ({
    garages: [
      { text: "1 Car", value: 1 },
      { text: "2 Car", value: 2 },
      { text: "3 Car", value: 3 },
      { text: "4 Car", value: 4 },
      { text: "5 Car", value: 5 },
      { text: "Parking Garage", value: 10 }
    ],
    selectedLabel: 1,
    size: ''
  }),
  methods: {
    addGarage: function() {
      this.garage = garages.value
    },
    changeValue: function(newValue) {
      if (newValue)
        this.selectedLabel = newValue;
        // addGarage(newValue)
      }
  },
  computed: {
    radioButtonValue: {
      get: function() {
        return (this.value === null) ? true : this.value
      },
      set: function() {
        // Communicate the change to parent component so that selectedValue can be updated
        this.$emit("change", this.garage);
      }
    }
  }
};
</script>

<style scoped>
h2 {
  color: #555;
}
</style>