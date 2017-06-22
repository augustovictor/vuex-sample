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
    },
    mutations: { // Better way to manipulate the states in store
        register(state, userId) {
            let user = state.users.find(user => {
                return user.id == userId;
            });
            user.registered = true;
            state.registrations.push(user);
            state.users.splice(state.users.indexOf(user), 1);
        },
        unregister(state, userId) {
            const user = state.registrations.find(user => {
                return user.id === userId;
            });
            console.log(state.registrations)
            user.registered = false;
            state.registrations.splice(state.registrations.indexOf(user), 1);
            state.users.push(user);
        }
    }
});