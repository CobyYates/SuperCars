<template>
    <v-col>
        <v-card class="mx-auto" :class="{'cyan darken-2' : this.activePlan === this.planName}" @keydown.space="updateActivePlan" max-width="344" @click="updateActivePlan">
          <v-img src="../assets/Garage.png" height="200px" width="70%"></v-img>
          <v-card-title>{{ this.planName }} Vehicle</v-card-title>
        </v-card>
      </v-col>
</template>

<script>
export default {
    props: ['planName', 'active-plan'],
    methods: {
        updateActivePlan() {
            this.$emit('onUpdatePlan', this.planName)
        }
    },
    model: {
        prop: 'activePlan',
        event: 'onUpdatePlan'
    }
}
</script>