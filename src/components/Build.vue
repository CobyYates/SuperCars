<template>
  <div>
      <!-- nested routes for page to page (video 244) -->
      <v-btn @click="getPeople"></v-btn>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    
  }),
  methods: {
    getPeople() {
      axios.get('https://uinames.com/api/')
      .then(response => {
        console.log(response.name)
      })
      .catch(error => console.error(error))
    }
  },
};
</script>

<style scoped>

</style>