<template>
  <v-col>
    <v-card
      class="mx-auto"
      :class="{'cyan darken-2' : this.activePlan === this.planName}"
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
        if (this.$store.state.selectedSize.length >= 1){
            this.$store.state.selectedSize.pop()
        }
        this.$store.state.selectedSize.push(this.planName)
        this.$emit("onUpdatePlan", this.planName);
      
    },
  },
  model: {
    prop: "activePlan",
    event: "onUpdatePlan"
  }
};
</script>