<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="user.first" label="First name*" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="user.last" label="Last name*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="user.email" label="Email*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="user.password" label="Password*" type="password" required></v-text-field>
              </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="6">
                  <!-- Add list to state management -->
                <v-autocomplete
                  :items="['Chevrolet HHR', 'Chevrolet SSR', 'Chrysler Sebring', 'Nissan Juke', 'Pontiac Aztek', 'PT Cruiser', 'Scion xB', 'Tesla Cybertruck', 'Toyota Prius']"
                  label="What is the ugliest car?"
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <!-- <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn> -->
          <v-btn color="blue darken-1" text @click="pushUser">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
    data: () => ({
      dialog: true,
      user: {
        first: "",
        last: '',
        email: '',
        password: '',
        uglyCars: [] 
      },
      test: ''
    }),
    methods: {
        pushUser() {          
          this.$store.state.user.push(this.user);
          this.dialog = false
          console.log(this.$store.state.user)
        }
    }
}
</script>

<style>

</style>