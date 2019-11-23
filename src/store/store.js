import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// export const store = new Vuex.Store({
export default new Vuex.Store({
    state: {
        selectedSize: [{"size": ''}],
        selectedCars: ['test'],
        selectedHelper: ['']
    },
    mutations: {

    },
    actions: {

    },
    getters: {
        carsList: state => {
            return state.selectedCars;
        }
    }
})