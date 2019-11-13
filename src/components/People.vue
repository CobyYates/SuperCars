<template>   
    <v-container>
      <v-row>
        <v-col class="mt-12 d-flex justify-center flex-column">
          <h2>Hire someone to take care of your vehicles</h2>
          <v-btn @click="getPeople()" color="teal accent-4" width="20%">Yes</v-btn>
        </v-col>
      </v-row>
      <v-row>
          <v-col sm="3" v-for="person in people">
              <!-- <v-card :person="person"> -->
                <v-card>
                  <v-img height="200" :src=person.photo></v-img>
                  <h3>{{ person.name }} {{ person.surname }}</h3>
                  <p>From: {{ person.region }}</p>
                  <p>Age: {{ person.age }}</p>
                  <v-btn class="d-flex justify-center" @click="hire(person)">HIRE</v-btn>
              </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-col class="d-flex justify-center">
            <router-link to="/build/complete">
              <v-btn color="teal accent-4" class="mb-12">SAVE MY GARAGE</v-btn>
            </router-link>
          </v-col>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            people: [],
        }
    },
    methods: {
        mounted(){
          this.getPeople()
        },
        getPeople() {
        axios.get('https://uinames.com/api/?ext&region=united states&amount=4')
        .then(response => {
            this.people = response.data
            // console.log(response.data)
        })
        .catch(error => console.error(error))
        },
        hire(person) {
          if(this.$store.state.selectedHelper <= 0) {
            this.$store.state.selectedHelper.pop()
            this.$store.state.selectedHelper.push(person)
            console.log(this.$store.state.selectedHelper)
          }
          else {
            this.$store.state.selectedHelper.pop()
            this.$store.state.selectedHelper.push(person)
          }
        },
    }
}
</script>

<style scoped>

</style>