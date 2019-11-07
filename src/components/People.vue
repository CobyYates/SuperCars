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
                  <h3>{{ people.name }} {{ people.surname }}</h3>
                  <p>Region: {{ people.region }}</p>
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
            console.log(people)
        })
        .catch(error => console.error(error))
        }
    }
}
</script>

<style scoped>

</style>