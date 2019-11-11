import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    activePlan: "0",
    picked: "0",
    garage: "",
    planName: "1",
  },
  actions: {
    update: function(updatedGarage) {
      this.$store.getters.updatedGarage = updatedGarage;
      // this.garage = updatedGarage
    },
  },
  getters: {
    garageSelected: state => {
      return state.activePlan;
    },
    // activePlan() {
    //   return this.store.state.activePlan;
    // }
  },
  mutations: {

  }
});
