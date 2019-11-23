<template>
  <v-card class="mx-auto mb-5" max-width="400" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-2">Car</div>
              <v-list-item-title class="headline mb-1"
                >{{car.make}} {{car.model}}</v-list-item-title>
              <v-list-item-subtitle
                >Your vehicle costs {{ car.price }}</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-avatar tile size="40%">
              <v-img :src="car.image"></v-img>
            </v-list-item-avatar>
            <v-img></v-img>
          </v-list-item>

          <v-card-actions class="d-flex justify-center">
            <v-btn text>Remove</v-btn>
          </v-card-actions>
        </v-card>
</template>

<script>
export default {
props: ["car"],
}
</script>

<style>

</style>