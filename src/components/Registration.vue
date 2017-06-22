<template>
    <div>
        <h1>Not registered users [{{unregisteredCount}}] </h1>
        <ul>
            <li v-for="user in users">
                {{user.name}} - <a href="#" @click.prevent="register(user)">Register</a>
            </li>
        </ul>
    </div>
</template>

<script>

import {mapGetters} from 'vuex';

export default {
    methods: {
        register(user) {
            this.$store.commit('register', user.id);
        }
    },
    computed: {
        ...mapGetters({ // npm install --save-dev babel-preset-stage-2. Also change .babelrc
            unregisteredCount: 'totalUnregistered'
        }),
        users() {
            return this.$store.getters.unregisteredUsers
        }
    }
}
</script>

<style scoped>
</style>