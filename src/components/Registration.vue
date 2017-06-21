<template>
    <div>
        <h1>Not registered users [{{totalUnregistered}}] </h1>
        <ul>
            <li v-for="user in users">
                {{user.name}} - <a href="#" @click.prevent="register(user)">Register</a>
            </li>
        </ul>
    </div>
</template>

<script>

import mapGatters from 'vuex'

export default {
    methods: {
        register(user) {
            const date = new Date;
            user.registered = true;
            const userObj = {
                userId: user.id,
                name: user.name,
                registered: true,
                date: `${date.getMonth()}/${date.getDay()}`
            };
            this.$store.state.registrations.push(userObj);
        }
    },
    computed: {
        ...mapGatters({ // npm install --save-dev babel-preset-stage-2. Also change .babelrc
            registeredCount: 'totalRegistrations',
            unregisteredCount: 'totalUnregistered',
        }),
        users() {
            return this.$store.getters.unregisteredUsers;
        }
    },
}
</script>

<style scoped>
</style>