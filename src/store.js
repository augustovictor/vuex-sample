import Vue from 'vue';
import Vuex from 'vuex';

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
    getters: {
        unregisteredUsers(state) {
            return state.users.filter(user => {
                return !user.registered;
            });
        },
        registrations(state) {
            return state.registrations.filter(user => {
                return user.registered;
            });
        },
        totalRegistrations(state) {
            return state.registrations.length;
        },
        totalUnregistered(state) {
            return state.users.length;
        }
    }
});