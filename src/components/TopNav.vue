<template>
  <div>
    <v-toolbar dark class="mb-0">
      <router-link to="/" active-class="active" exact>
        <a href="#">
          <img class="logo" src="https://i.imgur.com/a8JzMHo.png" alt />
        </a>
      </router-link>
      
      <v-toolbar-title>The Garage</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-toolbar-items>
        <v-divider class="teal darken-3" vertical></v-divider>
        <router-link tag="v-btn" to="/" active-class="active" exact>
          <a>
            <v-btn text color="teal accent-3">HOME</v-btn>
          </a>
        </router-link>
        <v-divider class="teal darken-3" vertical></v-divider>
        <router-link tag="v-btn" to="/build" active-class="active" exact>
          <a>
            <v-btn text color="teal accent-3">BUILD GARAGE</v-btn>
          </a>
        </router-link>
        <v-divider class="teal darken-3" vertical></v-divider>
        <router-link tag="v-btn" to="/grid" active-class="active" exact>
          <a>
            <v-btn text color="teal accent-3">CARS</v-btn>
          </a>
        </router-link>
        <v-divider class="teal darken-3" vertical></v-divider>
        <router-link tag="v-btn" to="/contact" active-class="active" exact>
          <a>
            <v-btn text color="teal accent-3">CONTACT</v-btn>
          </a>
        </router-link>
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