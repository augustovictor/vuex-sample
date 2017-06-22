import Vue from 'vue';
import Vuex from 'vuex';
import Getters from './getters'
import Mutations from './mutations'
import Actions from './actions'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        registrations: [],
        users: [
            {id: 1, name: 'Person 1', registered: false},
            {id: 2, name: 'Person 2', registered: false},
            {id: 3, name: 'Person 3', registered: false},
            {id: 4, name: 'Person 4', registered: false},
            {id: 5, name: 'Person 5', registered: false},
        ]
    },
    getters  : Getters, // Get values from state
    mutations: Mutations, // Better way to manipulate the states in store and they must run synchronously
    actions  : Actions // Async operations. Often they are named as mutation methods because they work as a middleware before committing the mutations
});