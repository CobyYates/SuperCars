<template>
  <v-card class="mx-auto mb-12" max-width="400" dark outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">Hired Helper</div>
        <v-list-item-title class="headline mb-1">
          {{ this.$store.state.selectedHelper[0].name }}
          {{ this.$store.state.selectedHelper[0].surname }}</v-list-item-title>
        <v-list-item-subtitle>
            <p>From: {{ this.$store.state.selectedHelper[0].region }} </p>
            <p>Age: {{ this.$store.state.selectedHelper[0].age }}</p>
        </v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="80">
        <v-img :src="this.$store.state.selectedHelper[0].photo"></v-img>
      </v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>

<script>
export default {};
</script>

<style></style>
