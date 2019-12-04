<template>
  <div>
    <v-toolbar dark class="mb-0">
      <router-link to="/" active-class="active" exact>
        <a href="#">
          <img class="logo" src="https://i.imgur.com/a8JzMHo.png" alt />
        </a>
      </router-link>

      <v-toolbar-title v-if="this.$store.state.user.length === 1">Welcome {{ this.$store.state.user[0].first }}</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-toolbar-items>

        <v-divider class="teal darken-3" vertical></v-divider>

        <v-btn to="/" exact text color="teal accent-3">HOME</v-btn>

        <v-divider class="teal darken-3" vertical></v-divider>

        <v-btn to="/build" exact text color="teal accent-3">BUILD GARAGE</v-btn>

        <v-divider class="teal darken-3" vertical v-if="this.$store.state.selectedHelper.length === 1"></v-divider>

        <v-btn to="/build/complete" exact text color="teal accent-3" v-if="this.$store.state.selectedHelper.length === 1">MY GARAGE</v-btn>

        <v-divider class="teal darken-3" vertical></v-divider>

        <v-btn to="/contact" exact text color="teal accent-3">CONTACT</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data: () => ({})
};
</script>

<style scoped>
.logo {
  height: 50px;
  padding-right: 20px;
}
v-btn {
  height: 100%;
}
v-toolbar__content {
  padding-right: 0;
}
</style>