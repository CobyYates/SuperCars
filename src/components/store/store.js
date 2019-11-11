import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        activePlan: '0',
        picked: '0',
        garage: '',
        planName: '',
    },
    getters: {
        garageSelected: state => {
            return state.activePlan
        }
    }
})