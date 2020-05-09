import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        planName: ''
    },
    getters: {

    },
    // mutations: {
    //     assignName: (state, newName) => {
    //         state.planName = newName
    //     }
    // }
})