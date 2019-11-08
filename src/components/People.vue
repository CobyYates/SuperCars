<template>   
    <v-container>  <!-- :cars="cars" -->
      <v-row>
        <v-col class="mt-12">
          <h2>Hire someone to take care of your vehicles</h2>
            <v-btn @click="getPeople()" color="green darken-1">Yes</v-btn>
        </v-col>
      </v-row>
      <v-row>
          <v-col sm="3" v-for="person in 4">
              <v-card>
                  <!-- <v-img src="people.photo"></v-img> -->
                  <h3>{{ people.name }} {{ people.surname }}</h3>
                  <p>From: {{ people.region }}</p>
                  <v-btn class="d-flex justify-center">HIRE</v-btn>
              </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            people: [''],
        }
    },
    methods: {
        getPeople() {
        axios.get('https://uinames.com/api/?region=United States')
        .then(response => {
            this.people = response.data
        })
        .catch(error => console.error(error))
        }
    }
}
</script>

<style scoped>

</style>