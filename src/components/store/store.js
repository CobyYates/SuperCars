import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        activePlan: '0',
        picked: '0',
        garage: '',
        planName: '',
        methods: {
            update: function(updatedGarage){
            this.garage = updatedGarage
            }
          },
          updateActivePlan() {
            this.$emit('onUpdatePlan', this.planName)
        }
    },
    getters: {
        garageSelected: state => {
            return state.activePlan
        }
    },

})