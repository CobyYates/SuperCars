<template>
  <v-col>
    <v-card
      class="mx-auto"
      :class="{'cyan darken-2' :this.activePlan === this.planName}"
      @keydown.space="updateActivePlan"
      max-width="344"
      @click="updateActivePlan"
    >
      <v-img src="../assets/Garage.png" width="60%" class="mx-auto mt-3"></v-img>
      <v-card-title class="mx-auto d-flex justify-center">{{ this.planName }} Vehicles</v-card-title>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: ["planName", "active-plan"],
  data: () => ({
  }),
  methods: {
    updateActivePlan() {
      this.$store.state.selectedSize[0].size = this.planName
      console.log(this.$store.state.selectedSize[0].size)
      this.$emit("onUpdatePlan", this.planName);
    },
  },
  model: {
    prop: "activePlan",
    event: "onUpdatePlan"
  }
};
</script>