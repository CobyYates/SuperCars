<template>
    <v-card class="mx-auto mb-7" width="500" dark outlined>      
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-2">Car</div>
            <v-list-item-title class="headline mb-1"
              >{{ car.make }} {{ car.model }}</v-list-item-title>
            <v-list-item-subtitle
              >Your vehicle costs {{ car.price | currency }}</v-list-item-subtitle
            >
          </v-list-item-content>

          <v-list-item-avatar tile size="40%">
            <v-img :src="car.image"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-card-actions class="d-flex justify-center">
          <v-btn text @click="removeCar">Remove</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
  props: ["car"],
  data: () => ({
  }),
  methods: {
    removeCar() {
      this.show = false;
      let removed = this.car;
      let arr = this.$store.state.selectedCars;
      let i = arr.indexOf(removed);
      if (i > -1) {
        arr.splice(i, 1);
        console.log(this.$store.state.selectedCars);
      }  
    }
  },
};
</script>

<style>

</style>
