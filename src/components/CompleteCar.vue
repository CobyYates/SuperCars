<template>
  <v-card class="mx-auto mb-5" max-width="344" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">{{  }}</div>
              <v-list-item-title class="headline mb-1"
                >make model</v-list-item-title>
              <v-list-item-subtitle
                >Your vehicle costs ...</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-avatar tile size="80" >
            <v-img>Car Image</v-img>

            </v-list-item-avatar>
          </v-list-item>

          <v-card-actions class="d-flex justify-center">
            <v-btn text>Remove</v-btn>
          </v-card-actions>
        </v-card>
</template>

<script>
export default {

}
</script>

<style>

</style>