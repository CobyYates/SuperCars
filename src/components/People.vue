<template>   
    <v-container>
      <v-row>
        <v-col class="mt-12 d-flex justify-center">
          <h2>Hire someone to take care of your vehicles?</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="mt-4 d-flex justify-center">
          <v-btn id="hireBtn" @click="getPeople()" color="teal accent-4" width="20%">Yes</v-btn>
        </v-col>
      </v-row>
      <v-row class="people">
          <v-col sm="3" class="d-flex justify-center" v-for="person in people">
                <v-card dark class="flex-column d-flex justify-center">
                  <v-img height="200" :src=person.photo></v-img>
                  <v-row>
                    <v-col class="d-flex flex-column">
                      <h3 class="d-flex justify-center">{{ person.name }} {{ person.surname }}</h3>
                      <p class="pl-5 pt-3">From: {{ person.region }}</p>
                      <p class="pl-5">Age: {{ person.age }}</p>
                    </v-col>
                  </v-row>
                  <v-btn class="d-flex justify-center" color="teal" @click="hire(person)">HIRE</v-btn>
              </v-card>
        </v-col>
      </v-row>
      <v-row class="pt-12">
          <v-col class="d-flex justify-center">
            <div class="mt-12">
              <v-btn to="complete" color="teal accent-4">SAVE MY GARAGE</v-btn>
            </div>
          </v-col>
      </v-row>   

      <div class="text-center ma-2">
        <v-snackbar v-model="snackbar">
          {{ text }}
          <v-btn color="red" text @click="snackbar = false">
            Close
          </v-btn>
        </v-snackbar>
      </div>
    </v-container>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            people: [],
            test: '',
            snackbar: false
        }
    },
    methods: {
        mounted(){
          this.getPeople()
        },
        getPeople() {
          let btn = document.querySelector("#hireBtn")
        axios.get('https://uinames.com/api/?ext&region=united states&amount=4')
        .then(response => {
            this.people = response.data
            btn.setAttribute("style", "display: none;")
        })
        .catch(error => console.error(error))
        },
        hire(person) {
          if(this.$store.state.selectedHelper <= 0) {
            this.$store.state.selectedHelper.pop()
            this.$store.state.selectedHelper.push(person)
            this.snackbar = true
            this.text = 'Person Hired'
          }
          else {
            this.$store.state.selectedHelper.pop()
            this.$store.state.selectedHelper.push(person)
            this.snackbar = true
            this.text = 'Person Hired'
          }
        },
    }
}
</script>

<style scoped>
.people {
  /* height: 40vh; */
}
</style>